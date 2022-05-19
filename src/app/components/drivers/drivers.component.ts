import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddMoldel } from 'src/app/model/login/login.module';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  user_ = sessionStorage.getItem('user');
  data : any; aux: AddMoldel = {
    address: null,city: null,dob: null,firs_name: null,id: null,last_name: null,phone: null,ssn: null,zip: null
  };
  constructor(private server: RequestService, private router: Router, private serve: RequestService) { }

  ngOnInit(): void {
    this.server.driver_Select().subscribe((res: any)=>{
      console.log(res)
      const local = res;
      this.data = res;
      console.log(this.data)
    })
  }
  OnAdd(){
    this.router.navigate(['addtdriver']);
  }
  
  OnEdit(e: any){
    console.log(e);       
    sessionStorage.setItem('address', e.address);
    sessionStorage.setItem('city', e.city);
    sessionStorage.setItem('dob', e.dob);
    sessionStorage.setItem('firs_name', e.firs_name);
    sessionStorage.setItem('id', e.id);
    sessionStorage.setItem('last_name', e.last_name);
    sessionStorage.setItem('phone', e.phone);
    sessionStorage.setItem('ssn', e.ssn);
    sessionStorage.setItem('zip', e.zip);
    this.router.navigate(['editdriver']);

  }
  OnDelete(e: any){
      this.aux.id = e.id;
      this.serve.drive_Del(this.aux).subscribe((res)=>{
        console.log(res);
        window.location.reload();
      })
  }



}
