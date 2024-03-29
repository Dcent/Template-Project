﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TP.Mobile.App.Services.Account
{
    public class MockAccountService : IAccountService
    {
        public Task<double> GetCurrentPayRateAsync()
        {
            return Task.FromResult(200.0);
        }

        public Task<bool> LoginAsync(string username, string password)
        {
            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password))
            {
                return Task.FromResult(false);
            }
            return Task.Delay(1000).ContinueWith((task) => true);
        }
    }
}
