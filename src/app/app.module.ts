import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatDialogModule } from '@angular/material/dialog';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToTopButtonComponent } from './to-top-button/to-top-button.component';
import { FooterComponent } from './footer/footer.component';
import { WhyUseContentComponent } from './why-use-content/why-use-content.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { FeaturesComponent } from './features/features.component';
import { FilterComponent } from './filter/filter.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { FilterStorageComponent } from './filter-storage/filter-storage.component';
import { FilterBudgetComponent } from './filter-budget/filter-budget.component';
import { FilterTechnologyComponent } from './filter-technology/filter-technology.component';
import { FilterSowComponent } from './filter-sow/filter-sow.component';
import { FilterHeadingComponent } from './filter-heading/filter-heading.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { LoginErrorDialogComponent } from './login-error-dialog/login-error-dialog.component';
import { DuplicateEntryDialogComponent } from './duplicate-entry-dialog/duplicate-entry-dialog.component';
import { SignUpSuccessDialogComponent } from './sign-up-success-dialog/sign-up-success-dialog.component';
import { ProductImagesCarouselComponent } from './product-images-carousel/product-images-carousel.component';
import { ProductSectionBuyOnComponent } from './product-section-buy-on/product-section-buy-on.component';
import { ProductSectionDescriptionComponent } from './product-section-description/product-section-description.component';
import { PinCodeDialogComponent } from './pin-code-dialog/pin-code-dialog.component';
import { HeaderComponent } from './header/header.component';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { LoginPageSection2Component } from './login-page-section-2/login-page-section-2.component';
import { ChangePasswordDialogComponent } from './change-password-dialog/change-password-dialog.component';
import { PasswordChangeSuccessDialogComponent } from './password-change-success-dialog/password-change-success-dialog.component';
import { PasswordChangeNotSuccessDialogComponent } from './password-change-not-success-dialog/password-change-not-success-dialog.component';
import { ChangeUsernameDialogComponent } from './change-username-dialog/change-username-dialog.component';
import { UsernameChangeSuccessDialogComponent } from './username-change-success-dialog/username-change-success-dialog.component';
import { UsernameChangeNotSuccessDialogComponent } from './username-change-not-success-dialog/username-change-not-success-dialog.component';
import { ChangeEmailDialogComponent } from './change-email-dialog/change-email-dialog.component';
import { EmailChangeSuccessDialogComponent } from './email-change-success-dialog/email-change-success-dialog.component';
import { EmailChangeNotSuccessDialogComponent } from './email-change-not-success-dialog/email-change-not-success-dialog.component';
import { ChangeProfilePicDialogComponent } from './change-profile-pic-dialog/change-profile-pic-dialog.component';
import { ProfilePicChangeSuccessDialogComponent } from './profile-pic-change-success-dialog/profile-pic-change-success-dialog.component';
import { ProfilePicChangeNotSuccessDialogComponent } from './profile-pic-change-not-success-dialog/profile-pic-change-not-success-dialog.component';
import { DashboardMenuSectionComponent } from './dashboard-menu-section/dashboard-menu-section.component';
import { DashboardProfilePageComponent } from './dashboard-profile-page/dashboard-profile-page.component';
import { DashboardContactPageComponent } from './dashboard-contact-page/dashboard-contact-page.component';
import { LoginAgainPleaseDialogComponent } from './login-again-please-dialog/login-again-please-dialog.component';
import { ChangeAddressDialogComponent } from './change-address-dialog/change-address-dialog.component';
import { AddressChangeSuccessDialogComponent } from './address-change-success-dialog/address-change-success-dialog.component';
import { AddressChangeNotSuccessDialogComponent } from './address-change-not-success-dialog/address-change-not-success-dialog.component';
import { DashboardYourOrderPageComponent } from './dashboard-your-order-page/dashboard-your-order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    ToTopButtonComponent,
    FooterComponent,
    WhyUseContentComponent,
    ProductCatalogComponent,
    FeaturesComponent,
    FilterComponent,
    ProductSectionComponent,
    FilterStorageComponent,
    FilterBudgetComponent,
    FilterTechnologyComponent,
    FilterSowComponent,
    FilterHeadingComponent,
    LoginPageComponent,
    IndexPageComponent,
    SignUpPageComponent,
    AboutUsPageComponent,
    LoginErrorDialogComponent,
    DuplicateEntryDialogComponent,
    SignUpSuccessDialogComponent,
    ProductImagesCarouselComponent,
    ProductSectionBuyOnComponent,
    ProductSectionDescriptionComponent,
    PinCodeDialogComponent,
    HeaderComponent,
    SearchDialogComponent,
    LoginPageSection2Component,
    ChangePasswordDialogComponent,
    PasswordChangeSuccessDialogComponent,
    PasswordChangeNotSuccessDialogComponent,
    ChangeUsernameDialogComponent,
    UsernameChangeSuccessDialogComponent,
    UsernameChangeNotSuccessDialogComponent,
    ChangeEmailDialogComponent,
    EmailChangeSuccessDialogComponent,
    EmailChangeNotSuccessDialogComponent,
    ChangeProfilePicDialogComponent,
    ProfilePicChangeSuccessDialogComponent,
    ProfilePicChangeNotSuccessDialogComponent,
    DashboardMenuSectionComponent,
    DashboardProfilePageComponent,
    DashboardContactPageComponent,
    LoginAgainPleaseDialogComponent,
    ChangeAddressDialogComponent,
    AddressChangeSuccessDialogComponent,
    AddressChangeNotSuccessDialogComponent,
    DashboardYourOrderPageComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgxSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers:[
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }
