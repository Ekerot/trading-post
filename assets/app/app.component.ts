import { BookService } from './books/book.service';
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [BookService]
})
export class AppComponent {
    
}