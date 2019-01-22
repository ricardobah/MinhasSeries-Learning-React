using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using Presentation.Views;
using Presentation;

namespace Presentation
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        public void OnLoginClicked(object sender, EventArgs e)
        {
            Navigation.PushAsync(new MenuPage());
        }


    }
}
