﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TP.Mobile.App.PageModels;
using TP.Mobile.App.PageModels.Base;
using Xamarin.Forms;

namespace TP.Mobile.App.Services.Navigation
{
    public class NavigationService: INavigationService
    {
        public Task GoBackAsync()
        {
            return App.Current.MainPage.Navigation.PopAsync();
        }

        public async Task NavigateToAsync<TPageModel>(object navigationData = null, bool setRoot = false)
            where TPageModel : PageModelBase
        {
            var page = PageModelLocator.CreatePageFor(typeof(TPageModel));

            if (setRoot)
            {
                if (page is TabbedPage tabbedPage)
                {
                    App.Current.MainPage = tabbedPage;
                }
                else
                {
                    App.Current.MainPage = new NavigationPage(page);
                }
            }
            else
            {
                if (page is TabbedPage tabbedPage)
                {
                    App.Current.MainPage = tabbedPage;
                }
                else if (App.Current.MainPage is NavigationPage navPage)
                {
                    await navPage.PushAsync(page);
                }
                else
                {
                    App.Current.MainPage = new NavigationPage(page);
                }
            }

            if (page.BindingContext is PageModelBase pmBase)
            {
                await pmBase.InitializeAsync(navigationData);
            }
        }
    }
}
