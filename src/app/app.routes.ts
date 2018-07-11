import {RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { PartnersComponent } from './partners/partners.component';
import { PriceComponent } from './price/price.component';
import { ReviewComponent } from './review/review.component';
import { SocialComponent } from './social/social.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';

export const routes = RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent,
    
},
  
  {
    path: 'home',
    component: HomeComponent,
    
},
{
    path: 'about',
    component: AboutComponent,
    
  //  children: [
},
  {   path:'contact',
     component: ContactComponent

   
},
{
  path:'blog',
  component: BlogComponent 
},
//]
{
  path:'gallery',
  component: GalleryComponent
},

{
  path:'menu',
  component: MenuComponent
},
{
  path:'partners',
  component: PartnersComponent
},

{
  path:'price' ,
  component : PriceComponent,
  //canActivate: [AuthGuard]
},
    
{
path:'review',
component: ReviewComponent
},
{
  path:'social',
  component:SocialComponent
},
{
path:'userlogin',
component : UserloginComponent
},
{
  path:'register',
  component: RegistrationComponent
}


]);