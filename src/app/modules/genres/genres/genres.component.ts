import { Component, OnInit, ViewChild } from '@angular/core';
import { GenresDTO } from '../../../shared/repository/DTO/GenresDTO';
import { Subscription, merge } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { RolesService } from '../../../shared/services/roles.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { startWith, delay, switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of as observableOf } from 'rxjs';
import { DELETE } from '../../../shared/const/sharedConsts';
import { GenresService } from '../../../shared/services/genres.service';
import { AddDialogComponent } from '../../roles/dialogs/add-dialog/add-dialog.component';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'delete'];
  data: GenresDTO[] = [];
  private genresSubscription: Subscription;
  deleteIcon: string;
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  controls: FormArray;
  constructor(private genresService: GenresService, public dialog: MatDialog) { }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        delay(0),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.genresService.getAllGenres()
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
      let myGenre = this.controls.at(index).value as GenresDTO;
      this.genresService.updateGenre(myGenre);
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
    this.genresService.deleteGenre(id);
  }
  addNewGenre(): void {
    let newGenre = new GenresDTO();
    let dialogRef: MatDialogRef<AddDialogComponent, GenresDTO> = this.dialog.open(AddDialogComponent, {
      width: '300px',
      data: newGenre
    });
    dialogRef.afterClosed().subscribe(genre => {
      if (genre) {
        this.genresService.addGenre(genre);
      }
    })
  }
}
