import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
@Injectable()
export class FormDataServices 
{
  private token:string;
 private headers:HttpHeaders;
private _url = "http://test.web.api.acorsociety.com/api/users/userregistrationasync";
private _url1="http://test.web.api.acorsociety.com/api/users/userloginasync";
//private _url = "https://jsonplaceholder.typicode.com/users";
   constructor(private _http: HttpClient){
      this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
      // this.headers.set();
      //  this.headers.append('Accept', 'application/json');
      //   this.headers.append('Authorization','Negotiate');
          
       this.headers.append('Access-Control-Allow-Origin', '*');
      this.headers.append('Access-Control-Allow-Headers', 'Content-Type, Accept');
      this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      this.headers.append('Access-Control-Allow-Credentials', 'true');

   }

AddUsers(model)
{
  alert(JSON.stringify(model));
return this._http.post(this._url, JSON.stringify(model),{headers:this.headers});
  
}

Login(users)
{
  alert(JSON.stringify(users));
return this._http.post(this._url1, JSON.stringify(users),{headers:this.headers})
.pipe(map(item => {
  let token = item;
  console.log(JSON.stringify(token));
  localStorage.setItem('token', JSON.stringify(token));

}));
}
   LogOut(){
     localStorage.removeItem('token');
   }

//  getAllUsers(model)
//   {
//       //alert(this._url);
//   return this._http.post(this._url , JSON.stringify(model),{headers:this.headers})
//                       .map(res => res.json());
//   }
}
