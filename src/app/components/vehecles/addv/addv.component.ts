import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddVehichel } from 'src/app/model/login/login.module';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-addv',
  templateUrl: './addv.component.html',
  styleUrls: ['./addv.component.css']
})
export class AddvComponent implements OnInit {
  user_ = sessionStorage.getItem('user');
  dapp: AddVehichel ={id:null ,description:null ,capacity:null ,make:null , year: null}
  constructor(private server: RequestService, private router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.dapp)
    this.server.AddVehicles(this.dapp).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['vehicles']);
    })
  }

}
