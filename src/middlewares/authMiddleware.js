import admin from '../utility/firebaseInit.js';




const verifyToken= (req, res, next)=>{
    try {
        const token= req.headers.authorization.split(" ")[1];

        if(!token) return res.status(401).json({ message: "Unauthorised Access" });

        const decoded = admin.auth().verifyIdToken(token);
        console.log(decoded);
        req.user = decoded;
        // console.log(admin);
        next();
    } catch (error) {
        res.status(403).json({ message: "Error while Authenticating " });
    }
}

export default verifyToken;