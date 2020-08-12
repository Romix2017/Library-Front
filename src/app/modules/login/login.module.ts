import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { AuthService } from './services/auth.service';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { AccessGuard } from './guards/access.guard';
import { SuperadminGuard } from './guards/superadmin.guard';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  providers: [
    AuthGuard,
    AuthService,
    AccessGuard,
    SuperadminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    //LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
