import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive,Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {


  login:any;
constructor(private _DataService:DataService,private _Router:Router){
}
 ngOnInit(): void {
     this._DataService.islogined.subscribe((x)=>{
this.login=x;
  })
 }

 logOut(){
    this._Router.navigate(['/login']);
    this._DataService.islogined.next(false);
 }




}
