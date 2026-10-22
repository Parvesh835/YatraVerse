const jwt = require("jsonwebtoken");
require("dotenv").config();


const auth =(req, res, next)=>{
    try {
        // extract token
        const token = req.body.token || req.cookie.token;

        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token not found."
            })
        }

        // Verify token 
        try {
            const payload = jwt.verify(token, process.env.SECRET_KEY);
            console.log(payload);

            req.user = payload;
        } 
        catch (error) {
            return res.status(401).json({
                success:false,
                message:"Token is invalid."
            })
        }


        next();
    } 
    catch (error) {
        return res.status(401).json({
            success:flase,
            message : "Something went wrong while verfiying the token."
        })
    }
}


// verify Tourist

const isTourist = (req, res, next) => {
    try {
        if (req.User.role !== "Tourist") {
            return res.status(400).json({
                success: false,
                message: 'This is protected route for Tourist Only'
            });
            
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role is not matching'
        });
    }
}

// verify Agent

const isAgent = (req, res, next) => {
    try {
        if (req.User.role !== "Agent") {
            return res.status(400).json({
                success: false,
                message: 'This is protected route for Agents Only'
            });
            
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role is not matching'
        });
    }
}

// verify admin

const isAdmin = (req, res, next) => {
    try {
        if (req.User.role !== "admin") {
            return res.status(400).json({
                success: false,
                message: 'This is protected route for admin Only'
            });
            
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role is not matching'
        });
    }
}


module.exports = { auth, isAdmin, isAgent, isTourist };