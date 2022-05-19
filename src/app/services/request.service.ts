import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Modelos,LoginModule,AddMoldel,AddVehichel,AddRouter } from '../model/login/login.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = "http://localhost/serve-dev/build/";
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT',
    })
  };
  constructor(private http: HttpClient) { }



  auth(dapp: LoginModule): Observable<any>{
    return this.http.post(this.url+'app.php',dapp)
  }

  //--------------Drivers-----------------------------//
  driver_Select(): Observable<any>{
    return this.http.get(this.url+'drivers.php')
  }
  drive_Insert(opp: AddMoldel): Observable<any>{
    return this.http.post(this.url+'addDriver.php',opp)
  }
  drive_Put(opp: AddMoldel): Observable<any>{
    return this.http.put(this.url+'putDriver.php',opp)
  }
  drive_Del(opp: AddMoldel): Observable<any>{
    return this.http.post(this.url+'delDriver.php',opp)
  }
  //--------------Vehicles----------------------------//
  vehicles():Observable<any>{
    return this.http.get(this.url+'vehicles.php')
  }
  AddVehicles(dat: AddVehichel):Observable<any>{
    return this.http.post(this.url+'addVehicles.php',dat);
  }
  vehicules_put(dat: AddVehichel):Observable<any>{
    return this.http.put(this.url+'putVehicles.php',dat);
  }
  vehicules_Del(dat: AddVehichel): Observable<any>{
    return this.http.post(this.url+'delVehicles.php',dat)
  }
  //--------------Routes----------------------------//
  routesSq():Observable<any>{
    return this.http.get(this.url+'routes.php')
  }  
  Addroutes(datr: AddRouter):Observable<any>{
    return this.http.post(this.url+'addroutes.php',datr);
  }
  route_put(dat: AddRouter):Observable<any>{
    return this.http.put(this.url+'putRoutes.php',dat);
  }
  route_Del(dat: AddRouter): Observable<any>{
    return this.http.post(this.url+'delRoutes.php',dat)
  }
}