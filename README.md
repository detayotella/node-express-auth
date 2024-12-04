# Node Express Auth

A lightweight and robust authentication system built with Node.js and Express.js. It includes features such as user registration, login, password hashing, and JWT-based authentication.

## Features
- User registration with validation.
- Secure password hashing using **bcrypt**.
- Token-based authentication using **JWT**.
- Middleware for protected routes.
- Ready-to-use API endpoints for authentication.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/detayotella/node-express-auth.git
cd node-express-auth
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file with the following variables:

```bash

PORT=3000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET_KEY=JWT_SECRET_KEY
CLOUDINARY_CLOUD_NAME=CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY=CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=CLOUDINARY_API_SECRET
```

4. Start the development server:

```bash
npm run dev
```


## API Endpoints

| Method	| Endpoint	 | Description     |
|-----------|------------|-----------------|
| `POST` |	`/api/register` |	Register a new user |
| `POST` | `/api/login` |	Authenticate a user |
| `GET`	 | `/api/image/get` | fetch uploaded images |
| `GET` | `/api/admin/welcome` | Authenticate an admin |
| `POST` | `/api/image/upload` | Upload an Image |
| `GET` | `api/admin/welcome` | Admin welcome page |
| `GET` | `api/home/welcome` | Home page |
| `DELETE` | `api/image/delete` | Delete an image |
| `POST` | `/api/auth/change-password` | Change password |


## Technologies Used

* Node.js
* Express.js
* MongoDB
* bcrypt
* jsonwebtoken