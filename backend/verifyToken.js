const jwt = require("jsonwebtoken");

const { INVALID_TOKEN, ACCESS_DENIED } = require("./Constants");

// verify user by user's role type
function verifyPermission(roleType) {
  return (req, res, next) => {
    // Request token from the API's header
    const token = req.header("auth-token");
    // Check conditions
    if (token === null || token === undefined || token === "undefined")
      return res.status(401).send(ACCESS_DENIED);
    const userDetails = jwt.verify(token, process.env.TOKEN_SECRET);
    if (userDetails.role !== roleType)
      return res.status(401).send(ACCESS_DENIED);
    try {
      // Authorize user to do certain tasks
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
      // Use next func to continue
      next();
    } catch (error) {
      res.status(400).send(INVALID_TOKEN);
    }
  };
}

module.exports = { verifyPermission };
