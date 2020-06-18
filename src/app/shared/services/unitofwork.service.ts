import { Injectable } from '@angular/core';
import { IUnitOfWork } from '../repository/contracts/IUnitOfWork';
import { IBooksRepository } from '../repository/contracts/IBooksRepository';
import { HttpClient } from '@angular/common/http';
import { BooksRepository } from '../repository/concrete/BooksRepository';
import { BooksDTO } from '../repository/DTO/BooksDTO';

@Injectable({
  providedIn: 'root'
})
export class UnitofworkService implements IUnitOfWork {
  BooksRepo: IBooksRepository;
  constructor(private http: HttpClient) {
    this.BooksRepo = new BooksRepository(new BooksDTO(), http);
  }
}
