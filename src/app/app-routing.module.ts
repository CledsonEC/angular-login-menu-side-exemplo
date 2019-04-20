import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { UserResolver } from './shared/resolvers/user.resolver';

// Components
// import { HomePageComponent } from './root/pages/home-page/home-page.component';
// import { NotFoundPageComponent } from './root/pages/not-found-page/not-found-page.component';
// import { FullLayoutComponent } from './root/components/layouts/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './root/components/layouts/simple-layout/simple-layout.component';
import { CustomPreloadingStrategy } from './shared/configurations/custom-preloading.strategy';
import { FullLayoutComponent } from './root/components/layouts/full-layout/full-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  {
    path: 'account',
    component: SimpleLayoutComponent,
    data: { title: 'Account' },
    children: [
      { path: '', loadChildren: 'app/account/account.module#AccountModule', data: { title: null, preload: true } }
    ]
  },
   {
     path: '',
     component: FullLayoutComponent,
     data: { title: 'Home' },
     children: [
//       { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', resolve: { user: UserResolver }, data: { title: 'Dashboard', link: false, preload: true } },
//       { path: '', loadChildren: 'app/root/root.module#RootModule', data: { title: null, preload: true } }
     ]
   },
   {
     path: 'home',
     component: FullLayoutComponent,
     data: { title: 'Home' },
     children: [
//       { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', resolve: { user: UserResolver }, data: { title: 'Dashboard', link: false, preload: true } },
//       { path: '', loadChildren: 'app/root/root.module#RootModule', data: { title: null, preload: true } }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { preloadingStrategy: CustomPreloadingStrategy }
    )  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
