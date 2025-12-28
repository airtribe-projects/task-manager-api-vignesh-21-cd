1.Project Overview
A simple RESTful Task Manager API built using Node.js and Express.js.
The API supports CRUD operations for managing tasks using in-memory storage and includes input validation and error handling.
All endpoints are tested using automated test cases.

2.Setup Instructions
npm install
npm run test

3.API Endpoints
Create Task
POST /tasks


Body

{
  "title": "Task title",
  "description": "Task description",
  "completed": false
}

Get All Tasks
GET /tasks

Get Task by ID
GET /tasks/:id

Update Task
PUT /tasks/:id


Body

{
  "title": "Updated title",
  "description": "Updated description",
  "completed": true
}

Delete Task
DELETE /tasks/:id

4.How to Test the API
npm run test
