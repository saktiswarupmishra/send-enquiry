# Send Enquiry Platform

A full-stack web application for handling bus and travel enquiries. The application is built using a modern component-based frontend and a robust backend API, designed to provide a cohesive and responsive user experience based on a provided Figma design.

## Project Structure

The project is divided into two main parts:
- `frontend/`: Contains the Vue.js 3 based user interface.
- `backend/`: Contains the Node.js/Hono based server and database APIs.

## Technologies Used

### Frontend
- **Vue 3** - JavaScript framework for building the UI
- **Vuetify 3** - Material Design component framework for Vue
- **Vite** - Next Generation Frontend Tooling
- **Pinia** - Intuitive, type safe, light and flexible Store for Vue
- **Vue Router** - Official router for Vue.js
- **Axios** - Promise based HTTP client for the browser and node.js

### Backend
- **Node.js** - JavaScript runtime environment
- **Hono** - Ultrafast web framework for the Edges
- **Prisma ORM** - Next-generation Node.js and TypeScript ORM
- **MySQL** - Relational database 
- **Dotenv** - Module to load environment variables

## Prerequisites

Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18+ recommended)
- [npm](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/) database

## Quick Start (Installation Scripts)

You can use the provided install scripts in the root directory to set up the project:
- `install.bat` / `install.js` - Scripts to install both frontend and backend dependencies.

## Manual Setup Instructions

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Make sure you have a `.env` file in the `backend` directory.
   - Example `.env` contents for Prisma and MySQL:
     ```env
     DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
     ```
4. Run Prisma Migrations to set up your database schema:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
   The backend server will be running on the configured port.

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## Features
- **Responsive Layout**: Adapts beautifully to mobile, tablet, and desktop screens.
- **Enquiry Form**: Interactive and user-friendly form for sending travel enquiries.
- **Dynamic Imagery**: Uses modular components like `PopularDestinations.vue` and `SidebarInfo.vue` for visual consistency.
- **Database Integration**: Seamless connection to MySQL via Prisma for storing and managing enquiry data.
- **API Endpoints**: RESTful API built with Hono for high performance.
