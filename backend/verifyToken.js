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
    console.log(roleType, "THIS");
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Access Denied");
    const userDetails = jwt.verify(token, process.env.TOKEN_SECRET);
    if (userDetails.role !== roleType)
      return res.status(401).send("ONLY ADMIN ACCESS");
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

// module.exports = function (permission) {
//   return (req, res, next) => {
//     const token = req.header("auth-token");
//     const userRole = req.body.role;
//     if (!token) return res.status(401).send("Access Denied");
//     try {
//       const verified =
//         jwt.verify(token, process.env.TOKEN_SECRET) &&
//         permission.includes(userRole);
//       req.user = verified;
//       next();
//     } catch (error) {
//       res.status(400).send("Invalid Token");
//     }
//   };
// };
