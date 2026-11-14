# Library Management REST API

## Project Overview
A professional RESTful API built with Node.js and Express utilizing strict MVC architecture to manage library books.

## Features
- MVC Design Pattern for clean separation of concerns.
- Full CRUD Support via GET, POST, PUT, PATCH, and DELETE methods.
- Robust, centralized error handling and invalid route middleware.
- Lightweight in-memory storage using JavaScript arrays.

## Project Structure
```text
library-management/
├── controllers/
│   └── bookController.js
├── models/
│   └── bookModel.js
├── routes/
│   └── bookRoutes.js
├── middleware/
│   ├── errorHandler.js
│   └── notFound.js
├── app.js
├── server.js
├── package.json
└── .env
