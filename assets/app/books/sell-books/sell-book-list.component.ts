import { Book } from './../book.model';
import { Component } from '@angular/core';

@Component({
    selector: 'app-sell-book-list',
    templateUrl: './sell-book-list.component.html'
})
export class SellBookListComponent{
    books: Book[] = [
        new Book('Lord of the rings', 'J.R.R Tolkien', 1954, '500', 'amazing book 10/10'),
        new Book('asdasd', 'J.R.R Tolkien', 1954, '350', 'amazing book 10/10'),
        new Book('Hohoho', 'J.R.R Tol', 1924, '899', 'amazing book 6/10'),
        new Book('Lord of the rings', 'J.R.R Tolkien', 1954, '259', 'amazing book 10/10'),
        
        
    ]
}