import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AddRouter } from 'src/app/model/login/login.module';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-add-r',
  templateUrl: './add-r.component.html',
  styleUrls: ['./add-r.component.css']
})
export class AddRComponent implements OnInit {
  user_ = sessionStorage.getItem('user');
  dapp:AddRouter ={id:null,description:null,driver_id:null,vehicile_id:null}
  constructor(private server: RequestService, private router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(){
      console.log(this.dapp)
      this.server.Addroutes(this.dapp).subscribe((res)=>{
        console.log(res)
        this.router.navigate(['routes']);
      })
  }

}
