import axios from 'axios'

const baseURL = "https://api-shank.onrender.com/"

export function getAllProdutcs(){
    const response = axios.get(`${baseURL}/produtos`)

    return response;
}