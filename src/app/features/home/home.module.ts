import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PopupComponent } from './popup/popup.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { NewsandtopicsComponent } from './newsandtopics/newsandtopics.component';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { ProductpagesComponent } from './productpages/productpages.component';
import { YourcartComponent } from './yourcart/yourcart.component';
import { ShippinginfoComponent } from './shippinginfo/shippinginfo.component';
import { DynamiccardproductComponent } from './dynamiccardproduct/dynamiccardproduct.component';
import { DynamiccarouselComponent } from './dynamiccarousel/dynamiccarousel.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule }   from '@angular/forms';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';




@NgModule({
  declarations: [HomeComponent, HomepageComponent, PopupComponent, ProductlistingComponent, NewsandtopicsComponent, CategorypageComponent, ProductpagesComponent, YourcartComponent, ShippinginfoComponent, DynamiccardproductComponent, DynamiccarouselComponent,AddproductComponent, UpdateproductComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class HomeModule { }
