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
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginErrorDialogComponent } from './login-error-dialog/login-error-dialog.component';
import { DuplicateEntryDialogComponent } from './duplicate-entry-dialog/duplicate-entry-dialog.component';
import { SignUpSuccessDialogComponent } from './sign-up-success-dialog/sign-up-success-dialog.component';
import { ProductImagesCarouselComponent } from './product-images-carousel/product-images-carousel.component';
import { ProductSectionBuyOnComponent } from './product-section-buy-on/product-section-buy-on.component';
import { ProductSectionDescriptionComponent } from './product-section-description/product-section-description.component';
import { PinCodeDialogComponent } from './pin-code-dialog/pin-code-dialog.component';

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
    DashboardComponent,
    LoginErrorDialogComponent,
    DuplicateEntryDialogComponent,
    SignUpSuccessDialogComponent,
    ProductImagesCarouselComponent,
    ProductSectionBuyOnComponent,
    ProductSectionDescriptionComponent,
    PinCodeDialogComponent,
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
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
