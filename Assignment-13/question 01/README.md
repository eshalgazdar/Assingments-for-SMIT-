# Employee Task Management REST API

## Project Overview
A robust RESTful API built with Node.js and Express following strict MVC (Model-View-Controller) architecture for managing employee tasks.

## Features
- Strict MVC Architecture separating models, controllers, routes, and middleware.
- Full CRUD Operations (Create, Read, Update via PUT/PATCH, and Delete).
- Advanced Filtering by status and priority.
- Additional Challenges: Task Summary counts, Employee task lookup, and Overdue tasks tracking.
- Centralized Error Handling middleware.

## Project Structure
```text
question-01/
├── controllers/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── routes/
│   └── taskRoutes.js
├── middleware/
│   ├── errorHandler.js
│   └── notFound.js
├── app.js
├── server.js
├── package.json
└── .env

