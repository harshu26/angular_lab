import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Book } from '../model/book';


@Injectable()
export class BookService{
client:HttpClient ;
constructor(client:HttpClient ){
this.client=client;
}
  books:Book[]=[
 ];

 //used to fetch all the book details present in booklist.json
 fetchBooks():Observable<Book[]>
{
    let url='assets/booklist.json';
  let observable:Observable<Book[]> =this.client.get<Book[]>(url);
  return observable;
}

}