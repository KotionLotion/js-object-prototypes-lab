const library = {
    name: 'City Library',
    books: [],

    addBook(title, author, isbn) {
        this.books.push({ title, author, isbn });
    },

    findBookByTitle(title) {
        return this.books.find(book => book.title === title) || null;
    },

    listAllBooks() {
        this.books.forEach(book => console.log(book.title));
    },
    // Bonus 
    findBooksByAuthor(author) { 
        return this.books.filter(book => book.author === author); 
    }
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];

universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    this.courses.push(courseName);
    this.addBook(title, author, isbn);
};

library.addBook('Gods Beautiful Mistake', 'Emely', '111');

universityLibrary.addCourseBook(
    'CMPS2212',
    'GUI',
    'Lewis',
    '222'
);

library.listAllBooks();                
console.log(library.findBookByTitle('GUI'));
console.log(universityLibrary.courses); 
