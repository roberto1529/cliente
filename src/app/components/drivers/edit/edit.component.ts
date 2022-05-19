import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddMoldel } from 'src/app/model/login/login.module';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user_ = sessionStorage.getItem('user');
  
  address = sessionStorage.getItem('address');
  city = sessionStorage.getItem('city');
  dob= sessionStorage.getItem('dob');
  firs_name = sessionStorage.getItem('firs_name');
  id = sessionStorage.getItem('id');
  last_name = sessionStorage.getItem('last_name');
  phone = sessionStorage.getItem('phone');
  ssn = sessionStorage.getItem('ssn');
  zip = sessionStorage.getItem('zip');

  Dapp: AddMoldel = {
    address:null,
    city: null,
    dob: null,
    firs_name: null,
    id: null,
    last_name: null,
    phone: null,
    ssn: null,
    zip: null
  }
  constructor(private server: RequestService, private router: Router) { 
  }
  
  ngOnInit(): void { }

  OnSubmit(){
    this.Dapp.address = this.address;
    this.Dapp.city = this.city;
    this.Dapp.dob = this.dob;
    this.Dapp.firs_name = this.firs_name;
    this.Dapp.id = this.id;
    this.Dapp.last_name = this.last_name;
    this.Dapp.phone = this.phone;
    this.Dapp.ssn = this.ssn;
    this.Dapp.zip = this.zip;



    console.log(this.Dapp)
    this.server.drive_Put(this.Dapp).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['driver']);
    })
   // 
  }

}
