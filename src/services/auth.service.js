import axios from 'axios';
//TODO поменять URL
const API_URL = 'http://backend.helppet.website:8080/account-service/api/v1/auth/';

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + 'sign-in', {
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
        const data = {
            firstName: firstName,
            username: username,
            email: email,
            password: password,
        }
        return axios.post(API_URL + 'sign-up', data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
        });
    }
}

export default new AuthService();