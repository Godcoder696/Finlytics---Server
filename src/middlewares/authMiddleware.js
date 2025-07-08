

const verifyToken= (req, res, next)=>{
    try {
        next();
    } catch (error) {
        
    }
}

export default verifyToken;