import { Injectable } from '@angular/core';
import { IUnitOfWork } from '../repository/contracts/IUnitOfWork';
import { IBooksRepository } from '../repository/contracts/IBooksRepository';
import { HttpClient } from '@angular/common/http';
import { BooksRepository } from '../repository/concrete/BooksRepository';
import { BooksDTO } from '../repository/DTO/BooksDTO';
import { IRolesRepository } from '../repository/contracts/IRolesRepository';
import { RolesRepository } from '../repository/concrete/RolesRepository';
import { RolesDTO } from '../repository/DTO/RolesDTO';
import { IGenresRepository } from '../repository/contracts/IGenresRepository';
import { GenresRepository } from '../repository/concrete/GenresRepository';
import { GenresDTO } from '../repository/DTO/GenresDTO';

@Injectable({
  providedIn: 'root'
})
export class UnitofworkService implements IUnitOfWork {
  BooksRepo: IBooksRepository;
  RolesRepo: IRolesRepository;
  GenresRepo: IGenresRepository;
  constructor(private http: HttpClient) {
    this.BooksRepo = new BooksRepository(new BooksDTO(), http);
    this.RolesRepo = new RolesRepository(new RolesDTO(), http);
    this.GenresRepo = new GenresRepository(new GenresDTO(), http);
  }
}
