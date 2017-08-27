import { Book } from './book.model';


export class BookService {
    
    // Central books array to store and manage all the messages in the frontend.
    private books: Book[] = [];

    // Adds a book to the array
    addBook(book: Book){
        this.books.push(book);
        console.log(this.books);
    }

    // Returns the messages array so that we have access to the array
    getBooks(){
        return this.books;
    }

    // Remove one element/book from the array
    removeBook(book: Book){
        this.books.splice(this.books.indexOf(book), 1);
    }




}