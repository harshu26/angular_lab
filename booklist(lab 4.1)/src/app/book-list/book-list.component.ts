import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../services/bookservice';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  service:BookService;
  books:Book[]=[];

  constructor(service:BookService) {
    this.service=service;
    let fetched:Observable<Book[]>= this.service.fetchBooks();
    fetched.subscribe(
      books=>{
        this.books=books;
      },
      err=>{
        console.log("Unable to fetch!!, Error occurs"+err);
      }
    );
  }

  ngOnInit(): void {
  }

}
