[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_XpznRuT)

# Exam #1: "CMSmall"

## Student: s306742 HOEFLING PADULA VICTOR

# Server side

## API Server

-   POST `/api/login`

    -   Request parameters: None
    -   Request body content: JSON object containing username and password
    -   Response body content: JSON object containing authentication token

-   GET `/api/something`

    -   Request parameters: None
    -   Response body content: JSON object containing something data

-   POST `/api/something`

    -   Request parameters: None
    -   Request body content: JSON object containing something data
    -   Response body content: JSON object containing the result of the operation

-   ...

## Database Tables

-   Table `users` - contains columns: xx, yy, zz
-   Table `something` - contains columns: ww, qq, ss
-   ...

# Client side

## React Client Application Routes

-   Route `/`: Home page that displays the main content of the application.
-   Route `/something/:param`: Page that displays detailed information about something, where `:param` is a dynamic parameter representing the specific something.
-   ...

## Main React Components

-   `ListOfSomething` (in `List.js`): A component that renders a list of something items and provides functionality for interacting with them.
-   `GreatButton` (in `GreatButton.js`): A reusable button component with a specific purpose and functionality.
-   ...

(Only main components are listed, minor ones may be skipped)

# Usage info

## Example Screenshot

![Screenshot](./img/screenshot.jpg)

## Users Credentials

-   User 1:

    -   Username: username1
    -   Password: password1
    -   Additional info: ...

-   User 2:
    -   Username: username2
    -   Password: password2
    -   Additional info: ...

Please note that the usernames, passwords, and any additional info are placeholders and should be replaced with actual credentials provided by the system administrator.

## README

This repository contains code for a web application that allows users to create and edit pages. The application is built using React for the frontend and Express.js for the backend.

### Frontend

The frontend code is located in the `src` directory. Here's a brief overview of the directory structure:

-   `components/pages`: Contains the main page components.
-   `components/UI`: Contains reusable UI components.
-   `components/UI/organisms`: Contains specific UI components used in the application.
-   `assets/icons`: Contains icon assets used in the application.

#### React Router

The application uses React Router for client-side routing. The routes are defined in the `App.js` file.

#### Authentication

The application supports user authentication using Passport.js. The login and registration forms are located in the `LoginForm.js`, `RegisterForm.js`, and `ProfileForm.js` files.

### Backend

The backend code is located in the root directory. Here's a brief overview of the files:

-   `server.js`: The main server file that sets up the Express.js server and configures middleware.
-   `user-dao.js`: Data access object for user-related operations.
-   `database.sqlite`: SQLite database file for storing page data.
-   `user-register.js`: Contains a function for registering users.

#### Middleware

The server uses several middleware modules, including `morgan`, `cors`, `express-session`, and `passport`.

#### Routes

The server defines the following routes:

-   `/api/login`: Handles user login authentication.
-   `/api/logout`: Handles user logout.
-   `/api/register`: Handles user registration.
-   `/pages`: Fetches pages from the database.
-   `/pages/:id`: Updates a page in the database.
-   `/pages`: Creates a new page in the database.

### Database

The application uses an SQLite database to store page data. The database is initialized and populated with sample data in the `database.sqlite` file.

### Usage

To run the application, follow these steps:

1. Install the necessary dependencies by running `npm install` in the root directory.
2. Start the server by running `npm start` in the root directory.
3. The application should now be running on `http://localhost:3000/`.

Note: Make sure you have Node.js and npm installed on your system.

Please let me know if you have any further questions!
