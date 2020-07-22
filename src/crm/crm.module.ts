import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CrmRoutingModule } from './crm-routing.modules';
import { CrmComponent } from './crm.component';

import { HttpClientModule }   from '@angular/common/http';


@NgModule({
  declarations: [
    CrmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CrmRoutingModule,
],
  providers: [],
  bootstrap: [CrmComponent]
})
export class CmsModule { }