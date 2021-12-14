import axios from 'axios';

const signup = (username, password) => {

    return axios.post('/signup', { username, password })
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err.response.data
        })
}

const login = (username, password) => {
    return axios.post('/login', { username, password })
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err.response.data
        })
}

const logout = () => {
    return axios.delete('/logout')
        .then(response => {
            return response.data

        })
        .catch(err => {
            return err.response.data
        })
}

export { signup, login, logout }