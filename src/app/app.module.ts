import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PanelComponent } from './components/panel/panel.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { EditComponent } from './components/drivers/edit/edit.component';
import { AddComponent } from './components/drivers/add/add.component';
import { VeheclesComponent } from './components/vehecles/vehecles.component';
import { EditvComponent } from './components/vehecles/editv/editv.component';
import { AddvComponent } from './components/vehecles/addv/addv.component';
import { RoutesComponent } from './components/routes/routes.component';
import { AddRComponent } from './components/routes/add-r/add-r.component';
import { EditRComponent } from './components/routes/edit-r/edit-r.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    DriversComponent,
    EditComponent,
    AddComponent,
    VeheclesComponent,
    EditvComponent,
    AddvComponent,
    RoutesComponent,
    AddRComponent,
    EditRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
