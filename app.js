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

app.get("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.post("/api/books", (req, res) => {
  res.json({ message: "Success" });
});

app.put("/api/books/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: "Success" });
});

app.delete("/api/books/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: "Success" });
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
