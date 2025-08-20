# Exercise Log

A dynamic full-stack MERN application for tracking exercises in real time.

## Description

**Exercise Log** is a Node.js-based full-stack web application that allows users to log, edit, and delete exercises. Built with the MERN stack (MongoDB, Express, React, Node.js), it updates in real time and provides a clean, intuitive interface for managing your workout history.

### User Interface

Main dashboard view:  
![Dashboard UI](https://github.com/user-attachments/assets/0340aefa-5f7f-46e2-9cf2-70bb5104af78)

Each exercise entry includes two buttons:
- ✏️ Edit — navigates to the edit page
- 🗑️ Delete — removes the exercise from the list  
![Edit/Delete Buttons](https://github.com/user-attachments/assets/72104e04-2c0d-4ede-90a0-cb978f8fddb6)

## Create & Edit Pages

### Create Page

Follow the specified format to add a new exercise. If the input is invalid, an error message will be displayed.  
![Create Page](https://github.com/user-attachments/assets/d4c1ca0f-2b48-42c7-936d-04d8d8163124)

### Edit Page

Update existing exercises and save your changes by clicking "Edits". Errors will be shown if the update fails.  
![Edit Page](https://github.com/user-attachments/assets/3d805bec-f5b2-4a92-8495-a582827556db)

## Tech Stack & Architecture

- Node.js with Express for backend API handling  
- MongoDB for database storage  
- React for the frontend SPA (Single Page Application)  
- MVC Architecture for clean separation of concerns

## Environment & Setup

> ⚠️ Note: The `.env` file is excluded for security reasons. Without it, the backend will not connect to the database.

To run locally:

1. Open two terminals — one for the frontend, one for the backend  
2. Run the following commands in each:

```bash
npm init
npm start
