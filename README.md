# Job Board Backend

This is a simple Job Board backend application built with Node.js, TypeScript, and MySQL. It provides a RESTful API for managing job postings.

## Features

- Create, read, update, and delete job postings.
- Store job data in a MySQL database.

## Project Structure

```
job-board-backend
├── src
│   ├── controllers        # Contains the logic for handling requests
│   ├── models             # Defines the data structure for job postings
│   ├── routes             # Sets up the API routes
│   ├── services           # Contains the business logic and database interactions
│   ├── config             # Database configuration
│   ├── app.ts             # Entry point of the application
│   └── types              # Custom types and interfaces
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd job-board-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the MySQL database:
   - Create a database for the application.
   - Update the database configuration in `src/config/database.ts`.

## Usage

1. Start the server:
   ```
   npm start
   ```

2. API Endpoints:
   - `POST /jobs`: Create a new job posting.
   - `GET /jobs`: Retrieve all job postings.
   - `GET /jobs/:id`: Retrieve a single job posting by ID.
   - `PUT /jobs/:id`: Update a job posting by ID.
   - `DELETE /jobs/:id`: Delete a job posting by ID.

## License

This project is licensed under the MIT License.