const authenticateMiddleware = (req, res, next) => {
    if (req.session && req.session.user) {
      // If the user is logged in, set the user object on req.user
     
      req.user = req.session.user;
    }
  
    next();
};

export default authenticateMiddleware;