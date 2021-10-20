const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}

function verifyPermission(roleType) {
  return (req, res, next) => {
    const token = req.header("auth-token");
    console.log(token === null || token === undefined || token === "undefined");
    if (token === null || token === undefined || token === "undefined")
      return res.status(401).send("Access Denied");
    const userDetails = jwt.verify(token, process.env.TOKEN_SECRET);
    if (userDetails.role !== roleType)
      return res
        .status(401)
        .send("You don't have permission to perform this action.");
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
      next();
    } catch (error) {
      res.status(400).send("Invalid Token");
    }
  };
}

module.exports = { verifyToken, verifyPermission };
