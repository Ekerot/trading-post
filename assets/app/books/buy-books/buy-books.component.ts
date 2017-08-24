import { Component } from '@angular/core';

@Component({
    selector: 'app-buy-books',
    template: `
        <div class="row">
            <app-buy-book></app-buy-book>
        </div>
        <hr>
        <div class="row">
            <app-buy-book-list></app-buy-book-list>
        </div>
    `
    
})
export class BuyBooksComponent{

}