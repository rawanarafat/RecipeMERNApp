import express from "express";
import authenticateMiddleware from '../middleware/authenticateMiddleware.js';

const router = express.Router();


// Protected route handler
const protectedRouteHandler = (req, res) => {
  if (req.user) {
    res.send(`Hello, ${req.user.name}! This is a protected route.`);
  } else {
    res.status(401).send('Unauthorized');
  }
};

// Apply the authentication middleware before the protected route
router.get('/', authenticateMiddleware, protectedRouteHandler);

export {router as protectedRouter};