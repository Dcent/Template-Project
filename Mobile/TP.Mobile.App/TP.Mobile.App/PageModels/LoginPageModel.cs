using System.Windows.Input;
using TP.Mobile.App.PageModels.Base;
using TP.Mobile.App.Services.Account;
using TP.Mobile.App.Services.Navigation;
using Xamarin.Forms;

namespace TP.Mobile.App.PageModels
{
    public class LoginPageModel : PageModelBase
    {
        private ICommand _signInCommand;
        private INavigationService _navigationService;
        private IAccountService _accountService;

        public ICommand SignInCommand
        {
            get => _signInCommand;
            set => SetProperty(ref _signInCommand, value);
        }

        private string _username;
        public string Username
        {
            get => _username;
            set => SetProperty(ref _username, value);
        }

        private string _password;
        public string Password
        {
            get => _password;
            set => SetProperty(ref _password, value);
        }

        public LoginPageModel(INavigationService navigationService, IAccountService accountService)
        {
            _navigationService = navigationService;
            _accountService = accountService;
            SignInCommand = new Command(OnSignInAction);
        }

        /// <summary>
        ///  Perform login validation and navigation if applicable
        /// </summary>
        /// <param name="obj"></param>
        private async void OnSignInAction(object obj)
        {
            var loginAttempt = await _accountService.LoginAsync(Username, Password);
            if (loginAttempt) 
            {
                // navigate to the Dashboard
               //await _navigationService.NavigateToAsync<DashboardPageModel>();
            }
            else
            {
                // Display an Alert for Failure
            }
        }
    }
}
