# Job Board Backend

This is a simple Job Board backend application built with Node.js, TypeScript, and MySQL. It provides a RESTful API for managing job postings.
## Live Link

You can access the API documentation at the following link:
[Job Board API Documentation](https://job-board-backend-107n.onrender.com/api-docs/#/)
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
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── Makefile               # Makefile for shortcuts
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd job-board-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up the MySQL database:
   - Create a database for the application.
   - Update the database configuration in `src/config/database.ts`.

4. Set up environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```
     PORT=3000
     DB_HOST=localhost
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_NAME=job_board
     ```

## Usage

1. Start the server:
   ```sh
   npm start
   ```

2. API Endpoints:
   - `POST /jobs`: Create a new job posting.
   - `GET /jobs`: Retrieve all job postings.
   - `GET /jobs/:id`: Retrieve a single job posting by ID.
   - `PUT /jobs/:id`: Update a job posting by ID.
   - `DELETE /jobs/:id`: Delete a job posting by ID.

## Docker

To run the project using Docker:

1. Build the Docker image:
   ```sh
   docker build -t job-board-backend .
   ```

2. Run the Docker container:
   ```sh
   docker run -p 3000:3000 --env-file .env job-board-backend
   ```

## Makefile

A Makefile is provided to simplify common tasks. Here are some shortcuts you can use:

- **Install dependencies**:
  ```sh
  make install
  ```

- **Start the server**:
  ```sh
  make start
  ```

- **Build the Docker image**:
  ```sh
  make docker-build
  ```

- **Run the Docker container**:
  ```sh
  make docker-run
  ```

### Example Makefile

```makefile
install:
    npm install

start:
    npm start

docker-build:
    docker build -t job-board-backend .

docker-run:
    docker run -p 3000:3000 --env-file .env job-board-backend
```

## API Documentation

API documentation is available using Swagger. Once the server is running, you can access the documentation at:
```
http://localhost:3000/api-docs
```

