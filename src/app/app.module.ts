import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    NavbarComponent,
    SlideshowComponent,
    HomeComponent,
    HomePageComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
