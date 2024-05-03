import user from "../model/user.model.js"
import { hashData } from "../utils/hashData.js";
export const createAccount = async (data) =>{
    try {
        const {name, email, password}=data;
        //checking if user already exists
        const existingUser = await user.findOne({email});
        if(existingUser){
res.status(403).json({message:'User with provided email already exists '})
        }

        //hash password

        const hashedPassword = await hashData(password);
        const newUser = new user({
            name,
            email,
            password:hashedPassword
        });
        //save new user
        const createdUser = await newUser.save();
        return createdUser;
    } catch (error) {
        
    }
}