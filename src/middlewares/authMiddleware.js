// import admin from '../utility/firebaseInit.js';

const verifyToken= (req, res, next)=>{
    try {
        // console.log(admin);
        next();
    } catch (error) {
        
    }
}

export default verifyToken;