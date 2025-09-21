import axios from "axios";

const api = "http://localhost:8082/products"

const fetchProduct = async() => {
    try{
        const response = await axios.get(api);
        console.log("response (fetchProduct.ts): ", response);
    }catch(error){
        console.error(error);
    }
}

export default fetchProduct;