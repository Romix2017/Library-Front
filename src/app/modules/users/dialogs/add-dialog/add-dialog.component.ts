import { Component, OnInit, Inject } from '@angular/core';
import { UsersDTO } from '../../../../shared/repository/DTO/UsersDTO';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RolesDTO } from '../../../../shared/repository/DTO/RolesDTO';
import { Observable } from 'rxjs';
import { RolesService } from '../../../../shared/services/roles.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  rolesItems: Observable<RolesDTO[]>;
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent, UsersDTO>,
    private rolesService: RolesService,
    @Inject(MAT_DIALOG_DATA) public data: UsersDTO) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.dialogRef.close(this.data);
  }
  ngOnInit() {
    this.rolesItems = this.rolesService.getAllRoles();
  }
}
