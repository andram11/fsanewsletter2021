import axios from 'axios';

const user_management_url= "http://fsanewsletterbackend-env.eba-dscfesq2.eu-central-1.elasticbeanstalk.com/api/v1/auth"


class UserService{
    /* signup(){
        return axios.post(article_base_url)
    } */

    signin(credentials){
        return axios.post(user_management_url + "/signin", credentials)
    }

}

export default new UserService();