const role =require("./role");
const user = require("../models/user")

const grantAccess = async(action ,resource)=>{
    return (req,res)=>{
        try {
            const permission = role.can(req.user.role)[action](resource);
            if (!permission.granted) {
                return  res.status(400).json({ error: "ypu don't have enough permission" });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}

module.exports = {grantAccess}