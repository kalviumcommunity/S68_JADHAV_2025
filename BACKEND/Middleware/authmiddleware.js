// 18002096006

const jwt=require("jsonwebtoken")


const generateToken=(userId)=>{
    return jwt.sign({id:userId},process.env.Secert_key,{expiresIn:'1d'});
}


const authenticateUser=(req,res,next)=>{
    const token=req.cookies.token

    if(!token){
       res.status(400).json({message:"Unathourised Token"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch{
        res.status(401).json({ message: 'Invalid token' })
    }
}

module.exports = { generateToken, authenticateUser };