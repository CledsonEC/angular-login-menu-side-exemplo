import { NgModule } from '@angular/core';
// import { SharedModule } from './../shared/shared.module';
import { RootRoutingModule } from './root-routing.module';

// // Directives
// import { NAV_DROPDOWN_DIRECTIVES } from './directives/nav-dropdown.directive';
// import { SIDEBAR_TOGGLE_DIRECTIVES } from './directives/sidebar.directive';
// import { AsideToggleDirective } from './directives/aside.directive';

// Components
// import { HomePageComponent } from './pages/home-page/home-page.component';
// import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { FullLayoutComponent } from './components/layouts/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './components/layouts/simple-layout/simple-layout.component';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FullLayoutComponent } from './components/layouts/full-layout/full-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
// import { ErrorPageComponent } from './pages/error-page/error-page.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { AccessDeniedPageComponent } from './pages/access-denied-page/access-denied-page.component';

// Services
// import { RootStore } from './stores/root.store';
// import { MenuItemService } from './../global/services/menu-item.service';

@NgModule({
  imports: [
    SharedModule,
    RootRoutingModule,
  ],
  declarations: [
    // HomePageComponent,
    // NotFoundPageComponent,
    // HeaderComponent,
    // FooterComponent,
    // FullLayoutComponent,
    SimpleLayoutComponent,
    HomePageComponent,
    FullLayoutComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SidebarComponent,
    // BreadcrumbComponent,
    // NAV_DROPDOWN_DIRECTIVES,
    // SIDEBAR_TOGGLE_DIRECTIVES,
    // AsideToggleDirective,
    // ErrorPageComponent,
    // SidebarComponent,
    // AccessDeniedPageComponent
  ],
  providers: [
    // RootStore,
    // MenuItemService
  ]
})
export class RootModule { }
