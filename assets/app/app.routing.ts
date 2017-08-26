import { SellBooksComponent } from './books/sell-books/sell-books.component';
import { SellBookListComponent } from './books/sell-books/sell-book-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BuyBookComponent } from './books/buy-books/buy-book.component';
import { SellBookInputComponent } from './books/sell-books/sell-book-input.component';
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/signup', pathMatch: 'full'},
    {path: 'sell-book', component: SellBooksComponent},
    {path: 'buy-book', component: BuyBookComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);