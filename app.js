const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },

  { id: 2, title: "1984", author: "George Orwell" },
];

//get requests to call all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

//get a single book by its id
app.get("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

//post request to add a new book
app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  //adding to the books array
  books.push(newBook);
  res.json(newBook);
});

//edit book byt its id
app.put("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  if (book) {
    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

//delete book by its id
app.delete("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    //remove particular book based on id from the array
    books.splice(index, 1);
    res.json({ message: "Book deleted successfully" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
