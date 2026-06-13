# PawRescue Backend

## Overview
The backend is a RESTful API built with Node.js, Express, MongoDB, and Mongoose. It manages authentication, animal records, adoption requests, favorites, updates, and dashboard analytics.

## Tech Stack
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

## Project Structure

backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
└── server.js

## Database Models

### User
- name
- email
- password
- role
- favorites

### Animal
- name
- type
- age
- gender
- image
- description
- story
- status

### AdoptionRequest
- user
- animal
- phone
- address
- reason
- matchScore
- status

### Update
- Animal progress updates

## API Endpoints

### Authentication

POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile

### Animals

GET    /api/animals
GET    /api/animals/:id
POST   /api/animals
PUT    /api/animals/:id
DELETE /api/animals/:id

### Adoption Requests

POST   /api/adoptions
GET    /api/adoptions/my
GET    /api/adoptions
PUT    /api/adoptions/:id

### Favorites

POST   /api/favorites/:animalId
GET    /api/favorites
DELETE /api/favorites/:animalId

### Updates

GET    /api/updates/:animalId
POST   /api/updates
DELETE /api/updates/:id

### Dashboard

GET    /api/dashboard/stats

## Authentication
- JWT-based authentication
- Protected routes middleware
- Admin-only authorization middleware

## Setup

### Install Dependencies

npm install

### Run Server

npm run dev

## Environment Variables

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## Middleware
- Authentication middleware
- Admin authorization middleware
- Error handling middleware
- Not found middleware

## Security
- Password hashing with bcryptjs
- JWT token validation
- Role-based access control
