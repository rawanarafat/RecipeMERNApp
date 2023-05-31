const responseHandler = (req, res) => {
  const userName = res.locals.userName;

  // Form the response
  const response = `Hello, ${userName}! This is the response.`;

  // Send the response
  res.send(response);
};

export default responseHandler;

