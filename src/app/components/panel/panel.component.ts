import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private router:Router) { }
  user_ = sessionStorage.getItem('user');
  ngOnInit(): void {
  }

  OnDrive(){
      console.log('Rutas crud driver')
      this.router.navigate(['driver'])
  }

  OnVehicles(){
    this.router.navigate(['vehicles']);
  }
  OnRoute(){
    this.router.navigate(['routes']);
  }
}
