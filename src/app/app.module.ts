//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AgmCoreModule } from '@agm/core'; //google maps
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainComponent } from './components/main/main.component' //have to import services

//services
import {ValidateService} from './services/validate.service' //have to import services
import {AuthService} from './services/auth.service';
import {MapService} from './services/map.service';

//guards
import {AuthGuardLogged} from './guards/auth.guardLogged';
import {AuthGuardNotLogged} from './guards/auth.guardNotLogged';

//environments
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {path:'', component: HomeComponent }, //home component and path is none because no path. EX: localhost:4200
  {path:'login', component: LoginComponent, canActivate:[AuthGuardNotLogged]  }, //will lead to /login page with login component EX: localhost:4200/login
  {path:'register', component: RegisterComponent, canActivate:[AuthGuardNotLogged]  }, //will lead to /register page with register component EX: Localhost:4200/register
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuardLogged] }, //will lead to /register page with register component EX: Localhost:4200/register. Protect route by adding canActivate
  {path:'main', component: MainComponent, canActivate:[AuthGuardLogged] } //will lead to /register page with register component EX: Localhost:4200/register. Protect route by adding canActivate
]; //make a routes object for our different routes

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: environment.api_key
    })
  ],
  providers: [ValidateService, AuthService, MapService, AuthGuardLogged, AuthGuardNotLogged], //add services here and guards
  bootstrap: [AppComponent]
})
export class AppModule { }
