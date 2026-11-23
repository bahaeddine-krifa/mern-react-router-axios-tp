# MERN React Router & Axios – TP

A practical MERN Stack exercise focused on **Single Page Application (SPA) navigation**, **Frontend-Backend communication**, and **REST API integration** using React Router, Axios, Express.js, and CORS.

## 📌 Project Overview

This project demonstrates how to build a multi-page React application using React Router and connect it to a REST API developed with Express.js.

The application is an article management portal where users can browse, view, create, edit, and delete articles without reloading the page.

It also demonstrates how to implement category filtering and browser history navigation.

## 🚀 Features

### Frontend – React

- Multi-page navigation using React Router.
- Nested routes and shared layouts.
- Dynamic routes using URL parameters.
- Navigation with `useNavigate()`.
- Article listing with data fetched from the backend.
- Article details displayed using dynamic IDs.
- Article creation form.
- Article editing form with preloaded data.
- Article deletion.
- Instant category filtering without reloading the page.
- Custom 404 page with browser history navigation.
- Loading and error states.

### Backend – Express.js

- REST API built with Express.js.
- CORS configuration for frontend communication.
- JSON request body parsing.
- In-memory article storage.
- CRUD operations:
  - GET: Retrieve articles.
  - POST: Create a new article.
  - PUT: Update an existing article.
  - DELETE: Remove an article.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Frontend library |
| React Router DOM | SPA navigation |
| Axios | HTTP requests |
| Vite | Frontend development server |
| Node.js | JavaScript runtime |
| Express.js | Backend REST API |
| CORS | Cross-origin communication |
| JavaScript (ES6+) | Application logic |
| CSS | Styling |

## 📂 Project Structure

```text
mern-react-router-axios-tp/
│
├── server/
│   └── server.js
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── layouts/
│   │   └── RootLayout.jsx
│   │
│   ├── pages/
│   │   ├── Accueil.jsx
│   │   ├── ArticleList.jsx
│   │   ├── ArticleDetail.jsx
│   │   ├── ArticleCreate.jsx
│   │   ├── ArticleEdit.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/bahaeddine-krifa/mern-react-router-axios-tp.git
```

### 2. Navigate to the project directory

```bash
cd mern-react-router-axios-tp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the Express backend

Open a terminal:

```bash
npm run server
```

The backend API will be available at:

```text
http://localhost:5000
```

### 5. Start the React frontend

Open another terminal in the project directory:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

## 🔌 REST API Endpoints

Base URL:

```text
http://localhost:5000/api
```

| Method | Endpoint | Description |
|---|---|---|
| GET | `/articles` | Retrieve all articles |
| GET | `/articles/:id` | Retrieve an article by ID |
| POST | `/articles` | Create a new article |
| PUT | `/articles/:id` | Update an existing article |
| DELETE | `/articles/:id` | Delete an article |

### Example: Create an Article

```http
POST /api/articles
Content-Type: application/json
```

Request body:

```json
{
  "titre": "Introduction to React",
  "categorie": "Front-End",
  "contenu": "Learning React fundamentals."
}
```

### Example: Update an Article

```http
PUT /api/articles/1
Content-Type: application/json
```

Request body:

```json
{
  "titre": "Updated React Article",
  "categorie": "Front-End",
  "contenu": "Updated article content."
}
```

## 🧭 Application Routes

| Route | Component | Description |
|---|---|---|
| `/` | Accueil | Home page |
| `/articles` | ArticleList | Article catalog |
| `/articles/:id` | ArticleDetail | Article details |
| `/articles/:id/modifier` | ArticleEdit | Edit an article |
| `/nouveau` | ArticleCreate | Create an article |
| `*` | NotFound | 404 page |

## 📚 Concepts Learned

This practical exercise covers several important concepts:

### React Router

- `BrowserRouter`
- `Routes` and `Route`
- `NavLink` and `Link`
- `Outlet`
- `useParams()`
- `useNavigate()`

### React Hooks

- `useState()`
- `useEffect()`

### Axios

- Centralized Axios instance.
- GET, POST, PUT, and DELETE requests.
- Asynchronous requests with `async/await`.
- Error handling with `try/catch`.

### Backend Communication

- Express REST API.
- HTTP methods and status codes.
- JSON request and response handling.
- CORS configuration.
- Frontend-Backend integration.

## ⚠️ Important Note

The backend currently uses an in-memory JavaScript array to store articles instead of a persistent MongoDB database.

This means that changes made to articles are lost when the Express server restarts.

The project focuses on understanding React Router, Axios, Express REST APIs, and frontend-backend communication rather than implementing persistent database storage.

## 🎯 Learning Objective

The main objective of this TP is to understand how a React Single Page Application communicates with a backend API and how to manage navigation, dynamic routes, HTTP requests, and application state.

---

**Academic Project – MERN Stack Practical Session**