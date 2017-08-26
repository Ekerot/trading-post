import { Component } from '@angular/core';

@Component({
    selector: 'app-sell-books',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <app-sell-book-input></app-sell-book-input>
            </div>
            <div class="col-md-7">
                <app-sell-book-list></app-sell-book-list>
            </div>
        </div>
    </div>
    `
})
export class SellBooksComponent {

}