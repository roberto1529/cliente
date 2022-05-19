import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Modelos { }

export interface LoginModule {
    user: string;
    clave: string;
 }

 export interface AddMoldel {
  address: any;
  city : any;
  dob: any;
  firs_name : any;
  id: any;
  last_name: any;
  phone: any;
  ssn: any;
  zip: any;
 }
 export interface AddVehichel {
  id:any;
  description: any;
  year: any;
  make: any;
  capacity: any;
 }

 export interface AddRouter {
  id:any;
  description:any;
  driver_id:any;
  vehicile_id:any;
 }