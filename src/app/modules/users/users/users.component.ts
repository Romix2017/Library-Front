import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersDTO } from '../../../shared/repository/DTO/UsersDTO';
import { Subscription, merge, of as observableOf } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../../shared/services/users.services';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { startWith, delay, switchMap, map, catchError } from 'rxjs/operators';
import { DELETE } from '../../../shared/const/sharedConsts';
import { AddDialogComponent } from '../dialogs/add-dialog/add-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'userName', 'dob', 'rolesId', 'delete'];
  data: UsersDTO[] = [];
  private usersSubscription: Subscription;
  deleteIcon: string;
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  controls: FormArray;
  constructor(private usersService: UsersService, public dialog: MatDialog) { }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        delay(0),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.usersService.getAllUsers()
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.length;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.data = data;
        const toGroups = this.data.map(entity => {
          return new FormGroup({
            id: new FormControl(entity.id),
            dob: new FormControl(entity.dob, Validators.required),
            firstName: new FormControl(entity.firstName, Validators.required),
            lastName: new FormControl(entity.lastName, Validators.required),
            userName: new FormControl(entity.userName, Validators.required),
            rolesId: new FormControl(entity.rolesId)
          }, { updateOn: "blur" })
        });
        this.controls = new FormArray(toGroups);
      })
  }
  updateField(index, field) {
    const control = this.getControl(index, field);
    if (control.valid) {
      let myUser = this.controls.at(index).value as UsersDTO;
      this.usersService.updateUser(myUser);
    }
  }
  getControl(index, fieldName) {
    return this.controls.at(index).get(fieldName) as FormControl;
  }
  ngOnInit(): void {
    this.deleteIcon = DELETE;
  }
  ngOnDestroy(): void {
  }
  deleteItem(id: number): void {
    this.usersService.deleteUser(id);
  }
  addNewBook(): void {
    let newUser = new UsersDTO();
    let dialogRef: MatDialogRef<AddDialogComponent, UsersDTO> = this.dialog.open(AddDialogComponent, {
      width: '300px',
      data: newUser
    });
    dialogRef.afterClosed().subscribe(book => {
      this.usersService.addUser(newUser);
    })
  }

}
