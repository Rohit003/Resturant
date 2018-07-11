import { Component, OnInit } from '@angular/core';
import { FormDataServices } from '../formdata.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  activetab="home";
  users;
  constructor(private formDataServices: FormDataServices) { }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('token'));
    console.log(this.users);
  }

  activetabchanges(tabname: string)  {
    this.activetab=tabname;

  }

  logout(){
    location.reload();
    this.formDataServices.LogOut();
  }

}
