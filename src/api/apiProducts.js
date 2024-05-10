import { API_URL } from "./apiUrl.js";

export const getApiProducts = async () => {
    try {
        const data         = await fetch(API_URL);
        const JSONproducts = await data.json();


        return JSONproducts;
    }catch(error){
       console.log(error.message)
        throw new Error({error:error.message})
    }
    
} 