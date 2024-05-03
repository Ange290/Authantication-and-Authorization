import express from 'express';
const router = express.Router();
import { createAccount } from '../controller/user.controller.js';
router.post('/signup',async(req,res,next) => {
    try{
    let {name, email, password} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    if(!(name && email && password)){
        return res.status(400).json({
            message: "All fields are required"
        });
    }
    else if(!/^[a-zA-Z ]*$/.test(name)){
        return res.status(400).json({
            message: "Name can only contain alphabets"
        });
    }
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        return res.status(400).json({
            message: "Email is invalid"
        });
    }
        else if(password.length <8){
            return res.status(400).json({
                message: "Password is too short"
            });
        }
        else{
            //good credentials, create a new user
            const newUser = await createAccount ({
                name,
                email,
                password
            });
            res.status(200).json(newUser);
        }
    
}catch(error){
    next(error);
}
});
export default router;