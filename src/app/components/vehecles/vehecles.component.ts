import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddVehichel } from 'src/app/model/login/login.module';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-vehecles',
  templateUrl: './vehecles.component.html',
  styleUrls: ['./vehecles.component.css']
})
export class VeheclesComponent implements OnInit {
  user_ = sessionStorage.getItem('user');
  data: any;
   aux:AddVehichel = {id:null,description:null,capacity:null,make:null, year: null}
  constructor(private server: RequestService, private router:Router) { }

  ngOnInit(): void {
    this.ServerList()
  }

  OnAdd(){
    
    this.router.navigate(['vehiclesadd']);
  }

  ServerList(){
    this.server.vehicles().subscribe((res)=>{
        this.data = res;
    })
  }
  OnEdit(e: any){
    console.log(e)   
    sessionStorage.setItem('capacity',e.capacity);
    sessionStorage.setItem('description',e.description);
    sessionStorage.setItem('id',e.id);
    sessionStorage.setItem('make',e.make);
    sessionStorage.setItem('year',e.year);
    this.router.navigate(['vehiclesedt']);
  }
  OnDelete(e: any){
    console.log(e)
    this.aux.id = e.id;
    this.server.vehicules_Del(this.aux).subscribe((res)=>{
      console.log(res)
      window.location.reload();
    })
  }

}
