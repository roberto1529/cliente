import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/drivers/add/add.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { EditComponent } from './components/drivers/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddRComponent } from './components/routes/add-r/add-r.component';
import { EditRComponent } from './components/routes/edit-r/edit-r.component';
import { RoutesComponent } from './components/routes/routes.component';
import { AddvComponent } from './components/vehecles/addv/addv.component';
import { EditvComponent } from './components/vehecles/editv/editv.component';
import { VeheclesComponent } from './components/vehecles/vehecles.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'driver', component: DriversComponent},
  {path: 'editdriver', component: EditComponent},
  {path: 'addtdriver', component: AddComponent},
  {path: 'vehicles', component: VeheclesComponent},
  {path: 'vehiclesadd', component: AddvComponent},
  {path: 'vehiclesedt', component: EditvComponent},
  {path: 'routes', component: RoutesComponent},
  {path: 'routesadd', component: AddRComponent},
  {path: 'routesedt', component: EditRComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
