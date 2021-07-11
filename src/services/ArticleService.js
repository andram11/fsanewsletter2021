import axios from 'axios';


const article_base_url= "http://fsanewsletterbackend-env.eba-dscfesq2.eu-central-1.elasticbeanstalk.com/api/v1/" 

const options = {
    headers: {'Content-Type': 'multipart/form-data',
    'Accept': '*/*'
}
  };

class ArticleService{
    getArticles(){
        return axios.get(article_base_url)
    }

    getArticleById(articleId){
        return axios.get(article_base_url + "articles" + "/"+ articleId)
    }

    createArticle(article){
        return axios.post(article_base_url + "articles", article, options
            )
    }

}

export default new ArticleService();