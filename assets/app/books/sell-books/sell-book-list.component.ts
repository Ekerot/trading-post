import { BookService } from './../book.service';
import { Book } from './../book.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sell-book-list',
    templateUrl: './sell-book-list.component.html'
})
export class SellBookListComponent implements OnInit {
    books: Book[];

    constructor(private bookService: BookService){}

    // Assign the this.books array to the array in the book.service.
    // We allways get the updated array from the service since it's a reference type
    // and points to the same place in memory
    ngOnInit(){
       this.books = this.bookService.getBooks();
    }
}