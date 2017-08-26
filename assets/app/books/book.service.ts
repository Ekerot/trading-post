import { Book } from './book.model';


export class BookService {
    books: Book[] = [];

    sellBook(book: Book){
        this.books.push(book);
    }

    displayBooks(){
        return this.books;
    }


}