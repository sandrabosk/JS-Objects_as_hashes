// We have received a request from the Public Library to send them an example of what would be a good way to
// organize their user registry:
// They want to track user’s information (user id and full name), and which books each user has.
// For each book, they want to have some information about the book: title, author, category and ISBN.
// Let’s split the problem into small parts. It’s the best way to confront a big problem.
// 1. First of all, let’s create the user object.

var user = { name: "Sandra", id: 7 }; // <------------------------------------------------------------------------
                                                                                                               //|
// In the same way, let’s create some book objects. Let’s create two different books (your favorite books)       |
// with the following data: Title, Author, ISBN and Category.                                                    |
                                                                                                               //|
var book1 = { title: "Dervis i smrt", author: "Mesa Selimovic", isbn: "0316769487", category: "Realism" };     //|
var book2 = { title: "Prophet", author: "Khalil Gibran", isbn: "0446310786", category: "Classic Literature" }; //|
                                                                                                             //  |
// The next step is to relate the books with the user. As we can deduce,                                         |
// a user can have several books at the same time. --------------------------------------------------------------

user.books = [];
user.books.push(book1);
user.books.push(book2);

console.log(user);

// Now, we have to create a library array, and add the only user that we have right now.
// Add the array of books to the user object
// Create the library array.
// Add the user object into the library array.

var library = [];
// If we just want to push user into library ---> library.push(user);
// if we gonna have users array inside our library:
library.users = [user];
console.log(library.users);

var book3 = { title: "Little Prince", author: "Antoine de Saint-Exupéry", isbn: "04461111111", category: "Novella" }; //|
library.users.forEach(function(user){
  if(user.name === "Sandra"){
    user.books.push(book3);
  }
});
console.log(library.users[0].books[0]); //dot notation (.)

// or
// console.log(library['users'][0].books[0]); 
