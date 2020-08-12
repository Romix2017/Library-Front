import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../modules/login/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userName: string;
  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userName = this.authService.getCurrentUserName();
  }
  logout(): void {
    this.authService.logout().subscribe(
      x => {
        this.router.navigate(["login"], { relativeTo: this.route.parent });
      }
    );
  }
}
