import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': 'd361abce-e3fe-4559-a11c-187885048550' }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    getUsers2(pageNumber, pageSize = 10) {
        return instanse.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {
        return instanse.post(`follow/${userId}`);
    },
    
    unfollow(userId) {
        return instanse.delete(`follow/${userId}`);
    },

    getProfile(userId) {
        return instanse.get(`profile/${userId}`);
    }
};

export const authAPI = {
    me() {
        return instanse.get(`auth/me`);
    }
};



