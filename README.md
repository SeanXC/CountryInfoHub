# CountryInfoHub

CountryInfoHub is a full-stack application that allows users to input a country name and view information about that country. It consists of a React frontend and a Node.js backend using Express, which communicates with the REST Countries API to fetch and display country data.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
  - [Using Docker](#using-docker)

## Technologies Used
- **Frontend:** React, Axios
- **Backend:** Node.js, Express, Axios
- **Deployment:** (e.g., Vercel, Render)

## Features
- Allows users to input a country name to search for.
- Retrieves country information from the REST Countries API.
- Displays country details like name, population, region, and more.
- Handles loading states and errors gracefully.

## File Structure
The project is structured with separate directories for the frontend and backend.

## Setup Instructions

Follow **3** steps to set up the backend and frontend for the project.

### 1. Backend Setup:
1. **Navigate to the `backend` directory:**
   ```bash
   cd backend
2. **Install dependencies:**
   ```bash
   npm install
3. **Start the backend server:**
   ```bash
   npm start
   
## 2. Frontend Setup:
1. **Navigate to the `frontend` directory:**
   ```bash
   cd frontend
2. **Install dependencies:**
   ```bash
   npm install
3. **Start the backend server:**
   ```bash
   npm start
## 3. Access the Application:
**Open your browser** and visit the following URL to use the app:
   [http://localhost:3000](http://localhost:3000)


### Using Docker
Follow **4** steps to run the application using Docker.

1. **Navigate to the project root directory** (where your `docker-compose.yml` file is located):
   ```bash
   cd /path/to/project/root
2. **Start the application using Docker Compose:**
   ```bash
   docker-compose up --build
3. **Access the Application:**
Open your browser and navigate to the following URL to use CountryInfoHub:  
[http://localhost:3000](http://localhost:3000)

4. **Stopping the Application:**
To stop the Docker containers, use `Ctrl + C` in the terminal or run:
```bash
docker-compose down

