import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddRouter } from 'src/app/model/login/login.module';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-edit-r',
  templateUrl: './edit-r.component.html',
  styleUrls: ['./edit-r.component.css']
})
export class EditRComponent implements OnInit {
  user_ = sessionStorage.getItem('user');
  id = sessionStorage.getItem('id');
  description = sessionStorage.getItem('description');
  driver_id = sessionStorage.getItem('driver_id');
  vehicile_id =sessionStorage.getItem('vehicile_id');

  dapp:AddRouter ={id:null,description:null,driver_id:null,vehicile_id:null}
  constructor(private server:RequestService, private route: Router) { }

  ngOnInit(): void {
  }
  OnSubmit(){
    this.dapp.description = this.description; 
    this.dapp.driver_id = this.driver_id;
    this.dapp.id = this.id;
    this.dapp.vehicile_id = this.vehicile_id;
    console.log('Update',this.dapp)
    this.server.route_put(this.dapp).subscribe((res)=>{
        console.log(res)
        this.route.navigate(['routes']);

        
    })
  }
}
