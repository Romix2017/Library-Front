import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterDTO } from '../../../shared/repository/DTO/RegisterDTO';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  registerEntity: RegisterDTO;
  constructor(private authService: AuthService, private router: Router) {
    this.registerEntity = new RegisterDTO();
  }

  ngOnInit(): void {
    this.registerFormGroup = new FormGroup({
      firstName: new FormControl(this.registerEntity.firstName),
      lastName: new FormControl(this.registerEntity.lastName, Validators.required),
      password: new FormControl(this.registerEntity.password),
      userName: new FormControl(this.registerEntity.userName)
    }, { updateOn: "blur" })
    console.log(this.registerFormGroup);
  }
  get f() { return this.registerFormGroup.controls; }
  getControl(fieldName) {
    return this.registerFormGroup.get(fieldName) as FormControl;
  }
  register() {
    this.registerEntity.firstName = this.f.firstName.value;
    this.registerEntity.lastName = this.f.lastName.value;
    this.registerEntity.password = this.f.password.value;
    this.registerEntity.userName = this.f.userName.value;
    this.authService.register(this.registerEntity).subscribe(success => {
      if (success) {
        this.router.navigate(['']);
      }
    })
  }
}
