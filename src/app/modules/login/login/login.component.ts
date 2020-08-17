import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService,
    private snackBar: MatSnackBar,
    private alertService: AlertService,
    private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }
  get f() { return this.loginForm.controls; }

  login() {
    this.authService.login({
      username: this.f.username.value,
      password: this.f.password.value
    }).subscribe(success => {
      if (success) {
        this.router.navigate(['']);
      } else {
        this.alertService.ErrorAlert("Wrong password and/or login", this.snackBar);
      }
    })
  }
}
