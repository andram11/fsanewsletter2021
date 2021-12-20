import axios from 'axios';

//const user_management_url= "https://api.intysfsanewsletter.be/api/v1/auth"
const user_management_url= "http://localhost:8081/api/v1/auth"

class UserService{
    signup(signUpRequest){
        return axios.post(user_management_url + "/signup", signUpRequest)
    }

    signin(credentials){
        return axios.post(user_management_url + "/signin", credentials)
    }

}

export default new UserService();