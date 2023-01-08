import axios from "axios";

const instance = axios.create({
    
    baseURL:"https://hamburgueria-kenzie-json-serve.herokuapp.com/",
    timeout: 1000

})

export default instance