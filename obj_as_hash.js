// We have received a request from the Public Library to send them an example of what would be a good way to
// organize their user registry:
// They want to track user’s information (user id and full name), and which books each user has.
// For each book, they want to have some information about the book: title, author, category and ISBN.
// Let’s split the problem into small parts. It’s the best way to confront a big problem.
// 1. First of all, let’s create the user object.

var user = { name: "Sandra", id: 7 };

// In the same way, let’s create some book objects. Let’s create two different books (your favorite books)
// with the following data: Title, Author, ISBN and Category.

var book1 = { title: "Dervis i smrt", author: "Mesa Selimovic", isbn: "0316769487", category: "Realism" };
var book2 = { title: "Prophet", author: "Khalil Gibran", isbn: "0446310786", category: "Classic Literature" };
