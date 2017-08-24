import { BuyBookComponent } from './books/buy-books/buy-books.component';
import { SellBookComponent } from './books/sell-books/sell-books.component';
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
        BuyBookComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}