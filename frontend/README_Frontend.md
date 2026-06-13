# PawRescue Frontend

## Overview
The frontend is a React + Vite application that provides a responsive interface for animal adoption and rescue management.

## Tech Stack
- React 19
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast
- React Icons

## Folder Structure

src/
├── assets/
├── components/
├── context/
├── layouts/
├── pages/
├── routes/
├── services/
└── utils/

## Key Pages

### Public Pages
- Home
- Login
- Register
- Animals Listing
- Animal Details

### Protected Pages
- Favorites
- My Requests

### Admin Pages
- Dashboard
- Add Animal
- Manage Animals
- Edit Animal
- Manage Requests

## Components
- Navbar
- Footer
- AnimalCard
- SearchBar
- FilterBar
- DashboardCard
- Loader
- ProtectedRoute

## State Management
Uses React Context for authentication management.

## Services Layer
The application uses dedicated service files for API communication:

- authService
- animalService
- adoptionService
- favoriteService
- updateService
- dashboardService

## Setup

### Install Dependencies

npm install

### Start Development Server

npm run dev

### Build Production Version

npm run build

## Environment Variable

VITE_API_URL=http://localhost:5000/api

## Routing
Implemented using React Router with protected routes for authenticated users and administrators.

## UI Features
- Responsive design
- Protected routes
- Toast notifications
- Dynamic animal listings
- Admin dashboard
