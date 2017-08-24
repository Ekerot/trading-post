import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { SellBookComponent } from './../books/sell-books/sell-books.component';
import { BuyBookComponent } from './../books/buy-books/buy-books.component';
import { BookComponent } from './../books/books.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from "../auth/auth.component";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        BuyBookComponent,
        SellBookComponent,
        AuthComponent,
        HeaderComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}