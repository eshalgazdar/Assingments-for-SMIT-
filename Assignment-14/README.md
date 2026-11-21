# Library Management REST API (MongoDB & Mongoose)

A RESTful API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** using **MVC architecture** for managing library books with persistent database storage.

## Features

- Full CRUD operations (`POST`, `GET`, `PUT`, `PATCH`, `DELETE`) backed by MongoDB and Mongoose.
- Case-insensitive book title search (`GET /api/books/search?title=Node`).
- Filter for currently available books (`GET /api/books/available`).
- Schema validation, invalid MongoDB `ObjectId` handling, 404 route handling, and centralized error middleware[cite: 1, 2].

## Project Structure

```text
library-management/
├── config/
│   └── db.js
├── controllers/
│   └── bookController.js
├── middleware/
│   ├── errorHandler.js
│   └── notFound.js
├── models/
│   └── bookModel.js
├── routes/
│   └── bookRoutes.js
├── .env.example
├── .gitignore
├── app.js
├── package.json
├── README.md
└── server.js

running the project:
npm run dev

npm start

Set your environment variables in .env
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/library_db?retryWrites=true&w=majority

server runs on: http://localhost:4000


API Endpoints
Method/Endpoint/Description
POST/api/booksCreate a new book
GET/api/booksRetrieve all books
GET/api/books/search?title=NodeSearch books by title
GET/api/books/availableRetrieve only available books
GET/api/books/:idRetrieve a single book by MongoDB _id
PUT/api/books/:idReplace/update a book by _id
PATCH/api/books/:idUpdate selected book fields by _id
DELETE/api/books/:idDelete a book by _id

sample request body:
{
  "title": "Node.js Design Patterns",
  "author": "Mario Casciaro",
  "category": "Programming",
  "publishedYear": 2020,
  "available": true
}
{
  "available": false
}