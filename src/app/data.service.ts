import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   constructor(private _HttpClient:HttpClient) {}


   login(data:any):Observable<any>{
      let res=this._HttpClient.post('https://dummyjson.com/user/login',data);
      return res;
    }
    islogined=new BehaviorSubject(false);
}


  

