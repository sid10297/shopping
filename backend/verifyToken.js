const jwt = require("jsonwebtoken");

const { INVALID_TOKEN, ACCESS_DENIED } = require("./Constants");

function verifyToken(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send(ACCESS_DENIED);
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send(INVALID_TOKEN);
  }
}

function verifyPermission(roleType) {
  return (req, res, next) => {
    const token = req.header("auth-token");
    if (token === null || token === undefined || token === "undefined")
      return res.status(401).send(ACCESS_DENIED);
    const userDetails = jwt.verify(token, process.env.TOKEN_SECRET);
    if (userDetails.role !== roleType)
      return res.status(401).send(ACCESS_DENIED);
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
      next();
    } catch (error) {
      res.status(400).send(INVALID_TOKEN);
    }
  };
}

module.exports = { verifyToken, verifyPermission };
