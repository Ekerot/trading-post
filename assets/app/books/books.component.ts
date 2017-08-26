import { Book } from './book.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html'
})
export class BookComponent {
    @Input() inputBook: Book;
}