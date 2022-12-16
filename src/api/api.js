import axios from "axios";

export const api = axios.create({
    baseURL: 'https://639a64b2d51415019734d045.mockapi.io/api/v1'
});

export const getAllUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};

export const getAllMobileGames = async () => {
    const response = await api.get('/games?filter=mobile');
    return response.data;
};

export const getAllPcGames = async () => {
    const response = await api.get('/games?filter=pc');
    return response.data;
};

export const getAllPromo = async () => {
    const response = await api.get('/promo');
    return response.data;
}