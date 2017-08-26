export class Book {
    constructor(
        public title: string,
        public author: string,
        public publishYear: number,
        public price: string,
        public description: string,
        public userId?: string,
        public bookId?: string
    ) { }
}