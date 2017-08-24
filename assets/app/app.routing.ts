import { AuthComponent } from './auth/auth.component';
import { BuyBookComponent } from './books/buy-books/buy-book.component';
import { SellBookComponent } from './books/sell-books/sell-book.component';
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'sell-book', component: SellBookComponent},
    {path: 'buy-book', component: BuyBookComponent},
    {path: 'auth', component: AuthComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);