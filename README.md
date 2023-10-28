# Sample-StudentAPI

This is a simple Stundent API built using Node.js Express, React & MySQL.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setting up the Project](#setting-up-the-project)
- [Running the Application](#running-the-application)
- [Features](#features)

## Prerequisites

Before starting with the installation process, ensure you have the following installed:

- [Node.js and npm](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/installer/)

## Installation

### Node.js and npm

If you haven't installed Node.js and npm, follow these steps:

1. Go to [Node.js official website](https://nodejs.org/en/download/).
2. Choose the appropriate version (v18.18.2) for your OS and download it.
3. Run the installer and follow the installation process.

**OR**

Alternatively, intall multiple Node.js using NVM [NodeWithNVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

To verify the installation, open your terminal and run:

```bash
node -v
npm -v
```

### MySQL

1. Download the MySQL installer from [here](https://dev.mysql.com/downloads/installer/).
2. Run the installer and follow the setup process.
3. After installation, start the MySQL server.
4. Create a database (schema) for the application and make a note of the credentials. You'll need them to set up the backend connection.

*Note: It's recommended to use a client tool like [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) for easier database management.*

**OR**

For more information follow [this]https://www.w3schools.com/mysql/mysql_install_windows.asp) to install MySQL.

## Setting up the Project

1. Clone the repository:

```bash
git clone https://github.com/MarkNisarg/Sample-StudentAPI.git
```

2. Navigate to the project directory:

```bash
cd Sample-StudentAPI
```

3. Install the required dependencies for client:

```bash
cd client
npm install
```

4. Install the required dependencies for server:

```bash
cd server
npm install
```

## Running the Application

1. Navigate to the directory `Sample-StudentAPI/server/config` open a `config.json` file in the root directory and add your database connection details under `development`:

```
"username": "YOUR_USERNAME",
"password": "YOUR_PASSWORD",
"database": "YOUR_DATABASE_SCHEME",
"host": "127.0.0.1",
"dialect": "mysql"
```

2. Start the backend server:

```bash
npm start
```

3. In another terminal, start the client or frontend:

```bash
npm start
```

Your client (React Application) should now be running on `http://localhost:3000`.
Your server (Node Application) should now be running on `http://localhost:3001`.

## Features

- **Add Student:** Allows users to add new students to the database.

  Access this feature by navigating to the "http://localhost:3000/add-student" route on the frontend.

- **View Students:** Displays a list of all students stored in the database.

  Access this feature from the home route ("/") or by navigating to the "/view-students" route.  
  Access this feature from the route ("http://localhost:3001/api/students").  
  If you want to get single student data use route ("http://localhost:3001/api/students/:userName")

- **Delete Student:** Users can remove a student's record based on their username.

  This functionality is integrated into the backend and can be triggered from the frontend user interface.
