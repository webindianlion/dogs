import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { DogsService } from './dogs.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteAComponent } from './route-a/route-a.component';
import { RouteBComponent } from './route-b/route-b.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteB1Component } from './route-b/route-b1/route-b1.component';
import { RouteB2Component } from './route-b/route-b2/route-b2.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DogsComponent } from './dogs/dogs.component';
import { BreadComponent } from './dogs/bread/bread.component';
import { SubbreadComponent } from './dogs/subbread/subbread.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteAComponent,
    RouteBComponent,
    PageNotFoundComponent,
    RouteB1Component,
    RouteB2Component,
    DepartmentDetailsComponent,
    DogsComponent,
    BreadComponent,
    SubbreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
