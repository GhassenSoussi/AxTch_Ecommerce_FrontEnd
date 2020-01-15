import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, RightsidebarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports: [NavbarComponent, FooterComponent, RightsidebarComponent]
})
export class SharedModule { }
