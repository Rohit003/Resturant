import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { routes } from './app.routes';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { ReviewComponent } from './review/review.component';
import { PartnersComponent } from './partners/partners.component';
import { MenuComponent } from './menu/menu.component';
import { PriceComponent } from './price/price.component';
import { SocialComponent } from './social/social.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormDataServices } from './formdata.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ConfigService } from './config.service';
import { AuthGuard } from './auth.guard';

const make={
  apiKey: "AIzaSyBkCxfcfll0dxovG_YCakhAThsQoGN4TGk",
  authDomain: "makeproject-fd87f.firebaseapp.com",
  databaseURL: "https://makeproject-fd87f.firebaseio.com",
  projectId: "makeproject-fd87f",
  storageBucket: "makeproject-fd87f.appspot.com",
  messagingSenderId: "235196792057"
}

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    BlogComponent,
    ReviewComponent,
    PartnersComponent,
    MenuComponent,
    PriceComponent,
    SocialComponent,
    Navbar2Component,
    RegistrationComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    routes,
   AngularFireModule.initializeApp(make) ,
   AngularFireAuthModule,
   FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [FormDataServices,ConfigService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
