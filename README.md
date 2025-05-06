# 👤 User Management Microservice

This is the **User Management** microservice for the Online Book Store application. It handles user-related operations including:

- Registration
- Login with JWT authentication
- Profile retrieval

This service is containerized with Docker and designed to work independently or alongside other services like Book, Order, and Payment services.

---

## 🚀 Technologies Used

- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **Docker** for containerization
- **Mocha** & **Chai** for testing

---

## 📁 Folder Structure

user-service/
│
├── src/
│ ├── config/ # Database & auth configuration
│ ├── controllers/ # Business logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express API routes
│ ├── services/ # Auth logic, utilities
│ ├── app.js # Express app setup
│
├── test/ # Unit and integration tests
├── Dockerfile # Docker build config
├── .env # Environment variables
├── package.json # Node.js dependencies
└── docker-compose.yml # Local dev with MongoDB
