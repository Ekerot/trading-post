import { Book } from './../book.model';
import { BookService } from './../book.service';
import { NgForm } from "@angular/forms";

import { Component } from '@angular/core';

@Component({
    selector: 'app-sell-book-input',
    templateUrl: './sell-book-input.component.html',
})
export class SellBookInputComponent {
    book: Book;

    // Inject the BookService to be able to use it
    constructor(private bookService: BookService){}

    // Add book to database
    onSubmit(form: NgForm){
        console.log(form);
        const book = new Book(
            form.value.title,
            form.value.author,
            form.value.publishYear,
            form.value.price,
            form.value.description

        )
        this.bookService.addBook(book);
        form.resetForm();
    }

}