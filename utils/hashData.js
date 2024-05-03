import bcryptjs from 'bcryptjs';
 export const hashData = async(data, saltRounds= 10)=>{
try {
    const hashedData = await bcryptjs.hash
    (data, saltRounds);
    return hashedData;
} catch (error) {
    next(error);
}
 }