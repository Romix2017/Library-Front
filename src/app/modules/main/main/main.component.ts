import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../login/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isAdmin: boolean;
  isUser: boolean;
  isSuperuser: boolean;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.isUser = this.authService.isUser();
    this.isSuperuser = this.authService.isSuperuser();
  }

}
