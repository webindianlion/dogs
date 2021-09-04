import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteAComponent} from './route-a/route-a.component';
import {RouteBComponent} from './route-b/route-b.component';
import { DogsComponent } from './dogs/dogs.component';
import { BreadComponent } from './dogs/bread/bread.component';
import { SubbreadComponent } from './dogs/subbread/subbread.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { RouteB1Component } from './route-b/route-b1/route-b1.component';
import { RouteB2Component } from './route-b/route-b2/route-b2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"route-a", component:RouteAComponent},
  {path:"route-b", component:RouteBComponent, children:[
    {path:"route-b1", component:RouteB1Component},
    {path:"route-b2", component:RouteB2Component}
  ]},
  {path:"dogs", component:DogsComponent},
  {path:"bread", component:BreadComponent},
  {path:"subbread", component:SubbreadComponent},
  {path:"departments/:id", component:DepartmentDetailsComponent},
  {path:"", redirectTo:"dogs", pathMatch: "full"},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
