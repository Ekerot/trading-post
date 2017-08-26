import { Component } from '@angular/core';

@Component({
    selector: 'app-sell-book-input',
    templateUrl: './sell-book-input.component.html'
})
export class SellBookInputComponent {

    // Add book to database
    onSell(){
        console.log('Works fine');
    }

}