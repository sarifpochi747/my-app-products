import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HeroSectionComponent } from './home_page/hero-section/hero-section.component';
import { PurposeComponent } from './home_page/purpose/purpose.component';
import { StandardComponent } from './home_page/standard/standard.component';
import { QuoteComponent } from './home_page/quote/quote.component';
import { UserSubmitComponent } from './home_page/user-submit/user-submit.component';
import { HomeComponent } from './home_page/home.component';
const routes: Routes = [
  { path: 'home', component: HeaderComponent },
]; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HeroSectionComponent,
    PurposeComponent,
    StandardComponent,
    QuoteComponent,
    UserSubmitComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule { }
