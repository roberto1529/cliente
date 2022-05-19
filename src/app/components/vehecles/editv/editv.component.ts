import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelos, AddVehichel } from 'src/app/model/login/login.module';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-editv',
  templateUrl: './editv.component.html',
  styleUrls: ['./editv.component.css']
})
export class EditvComponent implements OnInit {
  user_ = sessionStorage.getItem('user');

  capacity = sessionStorage.getItem('capacity');
  description = sessionStorage.getItem('description');
  id = sessionStorage.getItem('id');
  make = sessionStorage.getItem('make');
  year = sessionStorage.getItem('year');

  dapp: AddVehichel ={id:null ,description:null ,capacity:null ,make:null , year: null}
  constructor(private server: RequestService, private router:Router) { }

  ngOnInit(): void {
  }
  OnSubmit(){

   this.dapp.capacity = this.capacity;
    this.dapp.description = this.description;
    this.dapp.id = this.id;
    this.dapp.make = this.make;
    this.dapp.year = this.year;
     
    console.log(this.dapp);
    this.server.vehicules_put(this.dapp).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['vehicles']);
    })
  }
}
