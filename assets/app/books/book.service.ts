import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx'; //3rd party library

import { Book } from './book.model';

@Injectable()
export class BookService {
    
    // Central books array to store and manage all the messages in the frontend.
    private books: Book[] = [];

    constructor(private http: Http){}

    // Adds a book to the array and send a http post request to the backend
    addBook(book: Book){
        this.books.push(book);
        const body = JSON.stringify(book)
        const headers = new Headers({'Content-Type': 'application/json'});

        // sets up an observable which holds a request and allows us to subscribe.
        return this.http.post('http://localhost:3000/sell-book', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json())); 
    }

        

    // Returns the messages array so that we have access to the array
    getBooks(){
        return this.books;
    }

    // Remove one element/book from the array
    removeBook(book: Book){
        this.books.splice(this.books.indexOf(book), 1);
    }




}