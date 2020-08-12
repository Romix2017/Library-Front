import { Component, OnInit, Inject } from '@angular/core';
import { UsersDTO } from '../../../../shared/repository/DTO/UsersDTO';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RolesDTO } from '../../../../shared/repository/DTO/RolesDTO';
import { Observable } from 'rxjs';
import { RolesService } from '../../../../shared/services/roles.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  rolesItems: Observable<RolesDTO[]>;
  private formGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent, UsersDTO>,
    private rolesService: RolesService,
    @Inject(MAT_DIALOG_DATA) public data: UsersDTO) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.dialogRef.close(this.data);
    }
  }
  ngOnInit() {
    this.rolesItems = this.rolesService.getAllRoles();
    this.formGroup = new FormGroup({
      id: new FormControl(this.data.id),
      dob: new FormControl(this.data.dob, Validators.required),
      firstName: new FormControl(this.data.firstName, Validators.required),
      lastName: new FormControl(this.data.lastName, Validators.required),
      userName: new FormControl(this.data.userName, Validators.required),
      rolesId: new FormControl(this.data.rolesId, Validators.required),
      password: new FormControl(this.data.password, Validators.required)
    }, { updateOn: "blur" })
  }
  getControl(fieldName) {
    return this.formGroup.get(fieldName) as FormControl;
  }
}
