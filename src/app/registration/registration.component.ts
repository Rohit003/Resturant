import { Component, OnInit } from '@angular/core';
import { routes } from '../app.routes';
import {Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';

import {ReactUser} from './react.model';
import { UserExpress } from './Useregx';
import { Router } from '@angular/router';
import { FormDataServices } from '../formdata.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userForm: FormGroup;
 
  constructor(private fb: FormBuilder, private router:Router , private formdataservice:FormDataServices){}

  ngOnInit() {
    this.userForm = this.fb.group({
       'FirstName': ['', [Validators.required, Validators.minLength(5), UserExpress.Firstname]],
       'LastName': ['', [Validators.required, Validators.minLength(5), UserExpress.Lastname]],
       'EmailId': ['', [Validators.required, UserExpress.EmailID]],
       UserLogin: this.fb.group({
          'UserName':['',[Validators.required,UserExpress.UserName]],
         'Password': ['', [Validators.required, UserExpress.Password]]
    })
       
      
  })
    
      
    
      }
      Save(model:ReactUser)
   {
  this.formdataservice.AddUsers(model).subscribe(data =>{
  
  this.router.navigate(['/userlogin']);
  }),
  error =>alert(error),
  ()=>console.log("finished");
   }
    }

