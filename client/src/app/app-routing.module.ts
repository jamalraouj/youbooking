import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ChambersComponent} from "./chambers/chambers.component";
import {HotelComponent} from "./hotel/hotel.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"index",component:IndexComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminComponent},
  {path:"hotel/:id"  ,component:HotelComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(
    routes,

  )],
  exports: [RouterModule]

})
export class AppRoutingModule { }
