import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddMoldel } from 'src/app/model/login/login.module';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user_ = sessionStorage.getItem('user');
  dapp : AddMoldel = {address: null, city: null, dob: null,firs_name: null,id: null,last_name: null,phone: null,ssn: null,zip: null}
  constructor(private server: RequestService, private router: Router) { }

  ngOnInit(): void {
  }
  OnSubmit(){
    console.log(this.dapp)
    this.server.drive_Insert(this.dapp).subscribe((res)=>{
      console.log(res);
      const resp = res;
      if(resp.res === 'ok'){
        this.router.navigate(['driver']);
      }else{
        console.log('error no se puede ingresar ese usuario')
      }

    })
  }
}
