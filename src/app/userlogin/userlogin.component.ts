import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

import { UserExpress } from '../registration/Useregx';
import { RegistrationComponent } from '../registration/registration.component';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../app.routes';
import { FormDataServices } from '../formdata.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private router:Router , private formdataservice:FormDataServices) { }

  ngOnInit() {
    this.userForm = this.fb.group({

      UserLogin: this.fb.group({
        'UserName':['',[Validators.required,UserExpress.UserName]],
       'Password': ['', [Validators.required, UserExpress.Password]]
      
      }) 
   })
   
  }
  Save(users)
  {
    this.formdataservice.Login
    (users).subscribe(data =>{
      location.reload();
      this.router.navigate(['/home']);
      }),
      error =>alert(error),
      ()=>console.log("finished");
       
  }

}
