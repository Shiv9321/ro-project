import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

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
import { SignupComponent } from './signup/signup.component';
import { LoginPageComponent } from './login-page/login-page.component';

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
    SignupComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgxSliderModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
