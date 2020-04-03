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
  copy: Book[]=[];

  constructor(service:BookService) {
    this.service=service;
    let fetched:Observable<Book[]>= this.service.fetchBooks();
    fetched.subscribe(
      books=>{
        this.books=books;
        this.copy=this.copyArray(this.books);
      },
      err=>{
        console.log("Unable to fetch!!, Error occurs"+err);
      }
    );
  }

  ngOnInit(): void {
  }

  copyArray(arr:Book[]):Book[]{
    let books2=[];  
    for(let a of arr){
      books2.push(a);
    }
    return books2;
    }

    filterById(id:number){
      if(id===null || id===undefined){
        this.books=this.copy;
        return;
       }
       let id2=id.toString(); 
  
       let idFilter=[];
       for(let book of this.copy){
         let bookIdStr=book.id.toString();
         let found=bookIdStr.startsWith(id2);
          if(found){
            idFilter.push(book);
          }
       }
       this.books=idFilter;
      
    }
  
    filterByTitle(name:string){
      if(name===null || name===undefined){
        this.books=this.copy;
        return;
      }
      let titleFilter=[];
      for(let book of this.copy){
        let found=book.title.startsWith(name);
         if(found){
           titleFilter.push(book);
         }
      }
     
      this.books=titleFilter;
    }
  
    filterByYear(year:number){
      if(year===null || year===undefined){
        this.books=this.copy;
        return;
       }
       let year2=year.toString(); 
  
       let yearFilter=[];
       for(let book of this.copy){
         let bookIdStr=book.year.toString();
         let found=bookIdStr.startsWith(year2);
          if(found){
            yearFilter.push(book);
          }
       }
       this.books=yearFilter;
      
    }
    filterByAuthor(author:string){
      if(author===null || author===undefined){
        this.books=this.copy;
        return;
      }
      let authorFilter=[];
      for(let book of this.copy){
        let found=book.author.startsWith(author);
         if(found){
           authorFilter.push(book);
         }
      }
      this.books=authorFilter;
    }

}
