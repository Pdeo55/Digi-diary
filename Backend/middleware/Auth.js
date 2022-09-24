
const jwt = require('jsonwebtoken');
const config = require('./config');

const verifyToken= async(req,res,next)=>{

    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if(!token){
        return res.status(403).json("A token is required for authentication");
    }
    try {
        
        const decode = jwt.verify(token,config.TOKEN_KEY);
        req.user = decode;
    } catch (error) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}
module.exports = verifyToken;