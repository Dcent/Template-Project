using System.Threading.Tasks;
using TP.Mobile.App.PageModels;
using TP.Mobile.App.Services.Navigation;
using Xamarin.Forms;

namespace TP.Mobile.App
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();
        }
        Task InitNavigation()
        {
            var navService = PageModelLocator.Resolve<INavigationService>();
            return navService.NavigateToAsync<LoginPageModel>();
        }

        protected override async void OnStart()
        {
            await InitNavigation();
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
