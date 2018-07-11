import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private af:AngularFireAuth)

  {}

  Googlelog(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( acess => console.log("login"));
  }
}
