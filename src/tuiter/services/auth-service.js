import axios from "axios"

const API_BASE = process.env.REACT_APP_API_BASE;
const USERS_URL = `${API_BASE}/users`;
 
console.log(USERS_URL);


const api = axios.create({ withCredentials: true })


export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password })
    console.log("Login success")
    const user = response.data
    return user
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};
export const profile = async () => {
    try{
        const response = await api.post(`${USERS_URL}/profile`);
        return response;
    }catch (error){
        console.log(error);
    }
};
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}`, user);
    return response.data;
};
export const register = async (user) => {
    const response = await api.post(`${USERS_URL}/register`, user)
    const responseUser = response.data
    console.log("API triggered for registering users");
    console.log(responseUser);
    return responseUser
}

