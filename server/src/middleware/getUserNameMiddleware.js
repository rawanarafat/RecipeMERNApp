const getUserNameMiddleware = (req, res, next) => {
  // Assuming you have a session or authentication mechanism to retrieve the logged-in user
  
  const user = req.user; // Assuming req.user contains the logged-in user object
  console.log(user);

  if (user) {
    res.locals.userName = user.name; // Add the user's name to res.locals
  }

  next(); // Call next() to proceed to the next middleware or route handler
};

export default getUserNameMiddleware;
