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
import { IUsersRepository } from '../repository/contracts/IUsersRepository';
import { UsersRepository } from '../repository/concrete/UsersRepository';
import { UsersDTO } from '../repository/DTO/UsersDTO';
import { IBooksHistoryRepository } from '../repository/contracts/IBooksHistoryRepository';
import { BooksHistoryRepository } from '../repository/concrete/BooksHistoryRepository';
import { BooksHistoryDTO } from '../repository/DTO/BooksHistoryDTO';

@Injectable({
  providedIn: 'root'
})
export class UnitofworkService implements IUnitOfWork {
  BooksRepo: IBooksRepository;
  RolesRepo: IRolesRepository;
  GenresRepo: IGenresRepository;
  UsersRepo: IUsersRepository;
  BooksHistoryRepo: IBooksHistoryRepository;
  constructor(private http: HttpClient) {
    this.BooksRepo = new BooksRepository(new BooksDTO(), http);
    this.RolesRepo = new RolesRepository(new RolesDTO(), http);
    this.GenresRepo = new GenresRepository(new GenresDTO(), http);
    this.UsersRepo = new UsersRepository(new UsersDTO(), http);
    this.BooksHistoryRepo = new BooksHistoryRepository(new BooksHistoryDTO(), http);
  }
}
