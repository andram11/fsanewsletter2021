import axios from 'axios';

//const article_base_url= "https://api.intysfsanewsletter.be/api/v1/" 
const article_base_url= "http://localhost:8081/api/v1/" 

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
        return axios.post(article_base_url + "articles", article, options)
    }

    getArticleArchive(){
        return axios.get(article_base_url + "archive")
    }

    updateArticle(articleId, updatedArticle){
        return axios.patch(article_base_url + "articles" + "/"+ articleId, updatedArticle, options)

    }

}

export default new ArticleService();