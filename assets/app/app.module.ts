import { SellBooksComponent } from './books/sell-books/sell-books.component';
import { BuyBooksComponent } from './books/buy-books/buy-books.component';
import { BuyBookListComponent } from './books/buy-books/buy-book-list.component';
import { SellBookListComponent } from './books/sell-books/sell-book-list.component';
import { BuyBookComponent } from './books/buy-books/buy-book.component';
import { SellBookComponent } from './books/sell-books/sell-book.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { BookComponent } from './books/books.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        HeaderComponent,
        AuthComponent,
        BookComponent,
        SellBookComponent,
        BuyBookComponent,
        SellBookListComponent,
        BuyBookListComponent,
        BuyBooksComponent,
        SellBooksComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}