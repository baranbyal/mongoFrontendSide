import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }
    
    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }
    
    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }
    
    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }

    getDansciUyeBoard() {
        return axios.get(API_URL + 'dansciuye', { headers: authHeader() });
    }

    getYKBoard() {
        return axios.get(API_URL + 'yk', { headers: authHeader() });
    }

    getDDKBoard() {
        return axios.get(API_URL + 'ddk', { headers: authHeader() });
    }

    getLatinEgitmenBoard() {
        return axios.get(API_URL + 'latinegitmen', { headers : authHeader() });
    }
}

export default new UserService();