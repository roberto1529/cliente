import { Component, OnInit } from '@angular/core';
import { LoginModule } from 'src/app/model/login/login.module';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dapp: LoginModule = { user:'', clave:'' }
  user_ = sessionStorage.getItem('user');
  constructor(private toast: ToastrService, private serve: RequestService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(){
      if (this.dapp.user === '' || this.dapp.user === null) {
          this.toast.error('App Servi Info!', 'The user field cannot be empty');        
      }else  if (this.dapp.clave === '' || this.dapp.clave === null) {
        this.toast.error('App Servi Info!', 'The password field cannot be empty');        
      }else{
        console.log(this.dapp)
        this.serve.auth(this.dapp)?.subscribe((res)=>{
          let ret = res;
            if (ret.res === 'true') {
                console.log(res)
                sessionStorage.setItem('user', this.dapp.user);
                this.router.navigate(['panel']);
            }else{
              console.log('los datos no coinciden')
            }
        });
      }

  }

}
