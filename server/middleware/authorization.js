const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function(req, res, next) {
    try {
        
        const token = req.header("jwt_token");

        if (!token) {
            return res.status(403).json({msg: "Not Authorized"});
        }

        const verify = jwt.verify(token, process.env.JWTSECRET);

        req.user = verify.user;
        next();
    } catch (error) {
        console.error(error.message);
        return res.status(403).json({msg: "Not Authorized"});
    }
}