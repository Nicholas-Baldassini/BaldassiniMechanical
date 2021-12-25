import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ResidentialPageComponent } from './components/residential-page/residential-page.component';
import { CommercialPageComponent } from './components/commercial-page/commercial-page.component';
import { RenovationPageComponent } from './components/renovation-page/renovation-page.component';
import { QuotePageComponent } from './components/quote-page/quote-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';

const routeList: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'services/residential', component: ResidentialPageComponent },
  { path: 'services/commercial', component: CommercialPageComponent },
  { path: 'services/renovation', component: RenovationPageComponent },
  { path: 'services/quotes', component: QuotePageComponent },
  { path: 'gallery', component: GalleryPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    NavbarComponent,
    SlideshowComponent,
    HomePageComponent,
    ContactPageComponent,
    ResidentialPageComponent,
    CommercialPageComponent,
    RenovationPageComponent,
    QuotePageComponent,
    GalleryPageComponent,
    ServicesPageComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routeList), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
