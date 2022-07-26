import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BidderPageComponent } from './bidder-page/bidder-page.component';
import { BidderComponent } from './bidder/bidder.component';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { ContactComponent } from './contact/contact.component';
import { FarmerPageComponent } from './farmer-page/farmer-page.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { InsuranceApplicationComponent } from './insurance-application/insurance-application.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LoginComponent } from './login/login.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SellComponent } from './sell/sell.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  
  {
    path:"forget-pass",
    component:ForgetPassComponent
  },
  {
    path:"farmer",
    component:FarmerComponent
  },
  {
    path:"bidder",
    component:BidderComponent
  },
  {  
    path:"farmer-page",
    component:FarmerPageComponent
  },
  {
    path:"bidder-page",
    component:BidderPageComponent
  },
  {
    path:"sell",
    component:SellComponent
  },
  {
    path:"history",
    component:HistoryComponent
  },
  {
    path:"marketplace",
    component:MarketplaceComponent
  },
  {
    path:"insurance",
    component:InsuranceComponent
  },
  {
    path:"insurance-application",
    component:InsuranceApplicationComponent
  },
  {
    path:"claim-form",
    component:ClaimFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
