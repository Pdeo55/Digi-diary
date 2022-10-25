const role =require("./role");

const grantAccess = async(action ,resource)=>{
    return (req,res)=>{
        try {
            
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}

module.exports = {grantAccess}