import axios from 'axios';
//TODO поменять URL
const API_URL = 'http://backend.helppet.website:8080/';

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + 'signin', {
                username: username,
                password: password,
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(firstName, username, email, password) {
        return axios.post(API_URL + 'signup', {
            firstName: firstName,
            username: username,
            email: email,
            password: password,
        });
    }
}

export default new AuthService();