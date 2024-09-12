import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    ToTopButtonComponent,
    FooterComponent,
    WhyUseContentComponent,
    ProductCatalogComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
