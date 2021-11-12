import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bishan',
    loadChildren: () => import('./bishan/bishan.module').then( m => m.BishanPageModule)
  },
  {
    path: 'eastcoast',
    loadChildren: () => import('./eastcoast/eastcoast.module').then( m => m.EastcoastPageModule)
  },
  {
    path: 'gardens',
    loadChildren: () => import('./gardens/gardens.module').then( m => m.GardensPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'thanks',
    loadChildren: () => import('./thanks/thanks.module').then( m => m.ThanksPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'country-details/:name',
    loadChildren: () => import('./country-details/country-details.module').then( m => m.CountryDetailsPageModule)
  },
  {
    path: 'attract-detail/:id',
    loadChildren: () => import('./attract-detail/attract-detail.module').then( m => m.AttractDetailPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'poi-detail/:id',
    loadChildren: () => import('./poi-detail/poi-detail.module').then( m => m.PoiDetailPageModule)
  },
  {
    path: 'portal',
    loadChildren: () => import('./portal/portal.module').then( m => m.PortalPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'place-order',
    loadChildren: () => import('./place-order/place-order.module').then( m => m.PlaceOrderPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'poi-detail-country/:id/:name/:latitude/:longitude',
    loadChildren: () => import('./poi-detail-country/poi-detail-country.module').then( m => m.PoiDetailCountryPageModule)
  },{
    path: 'poi-detail-all/:id/:name/:latitude/:longitude',
    loadChildren: () => import('./poi-detail-country-all/poi-detail-country.module').then( m => m.PoiDetailCountryPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
