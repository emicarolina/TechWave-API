# TechWave API
A private REST API developed exclusively for the TechWave project, responsible for providing the entire backend infrastructure of a technology e-commerce platform.  
The application handles user authentication via JWT, full product management, and role-based access control (customer/admin), ensuring security and organized permission handling across the system.

## 🔗 Main Project Repository: [TechWave](https://github.com/emicarolina/TechWave)

### ⚠️ Private API
> Important: This is a **private REST API**, hosted on Vercel and used exclusively by the project's front-end application.  
> The repository is public for **portfolio and code demonstration purposes only**. Sensitive routes are protected using JWT authentication and role-based authorization.

## Technologies Used
- JavaScript (Node.js)
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- Bcrypt.js (password hashing)
- CORS
- Vercel (deployment)

## Security & Authentication
- JWT-based authentication
- Secure password storage using bcrypt hashing
- Route Protection Middleware: token validation on protected routes
- Role-Based Access Control: admin and customer roles
- Data Validation: Mongoose schemas with built-in validations
- CORS: configured to allow only authorized origins

## Data Models
### USER
```
{
  name: String,
  email: String (unique, lowercase),
  password: String (hashed, min 6 chars),
  role: "customer" | "admin",
  isActive: Boolean,
  timestamps: true
}
```

### PRODUCT
```
{
  name: String (max 100 chars),
  description: String (max 500 chars),
  price: Number (min 0),
  category: String,
  stock: Number (min 0),
  imageUrl: String,
  isActive: Boolean,
  timestamps: true
}
```

## 👩‍💻 Developed by Emilly
If you made it this far, thank you for checking out the project! 🤍
