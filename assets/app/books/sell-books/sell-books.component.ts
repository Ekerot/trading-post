import { Component } from '@angular/core';

@Component({
    selector: 'app-sell-books',
    template: `
        <div class="row">
            <app-sell-book-input></app-sell-book-input>
        </div>
        <hr>
        <div class="row">
            <app-sell-book-list></app-sell-book-list>
        </div>
    `

})
export class SellBooksComponent {

}