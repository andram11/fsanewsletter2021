import axios from 'axios';

const user_management_url= "https://api.intysfsanewsletter.be/api/v1/auth"


class UserService{
    /* signup(){
        return axios.post(article_base_url)
    } */

    signin(credentials){
        return axios.post(user_management_url + "/signin", credentials)
    }

}

export default new UserService();