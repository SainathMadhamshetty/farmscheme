import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { FarmerComponent } from './farmer/farmer.component';
import { BidderComponent } from './bidder/bidder.component';
import { FarmerPageComponent } from './farmer-page/farmer-page.component';
import { BidderPageComponent } from './bidder-page/bidder-page.component';
import { SellComponent } from './sell/sell.component';
import { HistoryComponent } from './history/history.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { HttpClientModule } from '@angular/common/http';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceApplicationComponent } from './insurance-application/insurance-application.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    FooterComponent,
    ForgetPassComponent,
    FarmerComponent,
    BidderComponent,
    FarmerPageComponent,
    BidderPageComponent,
    SellComponent,
    HistoryComponent,
    MarketplaceComponent,
    InsuranceComponent,
    InsuranceApplicationComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDividerModule,
    FormsModule,ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
