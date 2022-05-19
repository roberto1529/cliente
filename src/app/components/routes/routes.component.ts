import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddRouter } from 'src/app/model/login/login.module';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  user_ = sessionStorage.getItem('user');
  data: any;
  dapp:AddRouter ={id:null,description:null,driver_id:null,vehicile_id:null}

  constructor(private server: RequestService, private route: Router) { }

  ngOnInit(): void {
    this.Server()
  }
  OnAdd(){
    this.route.navigate(['routesadd']);
  }
  Server(){ 
    this.server.routesSq().subscribe((res)=>{
      console.log(res)
      this.data = res;
      
    })
  }

  OnEdit(e: any){
      console.log(e);
      sessionStorage.setItem('id',e.id);
      sessionStorage.setItem('description',e.description);
      sessionStorage.setItem('driver_id',e.driver_id);
      sessionStorage.setItem('vehicile_id',e.vehicile_id);
      this.route.navigate(['routesedt']);
  }
  OnDelete(e: any){
        this.dapp.id = e.id;
        this.server.route_Del(this.dapp).subscribe((res)=>{
          console.log(res)
          window.location.reload()
        })
  }

}
