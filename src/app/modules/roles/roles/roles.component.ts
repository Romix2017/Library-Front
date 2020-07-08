import { Component, OnInit, ViewChild } from '@angular/core';
import { RolesDTO } from '../../../shared/repository/DTO/RolesDTO';
import { Subscription, merge } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RolesService } from '../../../shared/services/roles.service';
import { startWith, delay, switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of as observableOf } from 'rxjs';
import { DELETE } from '../../../shared/const/sharedConsts';
import { AddDialogComponent } from '../dialogs/add-dialog/add-dialog.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'delete'];
  data: RolesDTO[] = [];
  private booksSubscription: Subscription;
  deleteIcon: string;
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  controls: FormArray;
  constructor(private rolesService: RolesService, public dialog: MatDialog) { }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        delay(0),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.rolesService.getAllRoles()
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
            name: new FormControl(entity.name, Validators.required)
          }, { updateOn: "blur" })
        });
        this.controls = new FormArray(toGroups);
      })
  }
  updateField(index, field) {
    const control = this.getControl(index, field);
    if (control.valid) {
      let myBook = this.controls.at(index).value as RolesDTO;
      this.rolesService.updateRole(myBook);
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
    this.rolesService.deleteRole(id);
  }
  addNewRole(): void {
    let newBook = new RolesDTO();
    let dialogRef: MatDialogRef<AddDialogComponent, RolesDTO> = this.dialog.open(AddDialogComponent, {
      width: '300px',
      data: newBook
    });
    dialogRef.afterClosed().subscribe(role => {
      this.rolesService.addRole(role);
    })
  }
}
