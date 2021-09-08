import React, { Component } from 'react'
import ArticleService from '.././..//services/ArticleService';
import '../Archive/Archive.css'
import _ from "lodash";

class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = { articles: [] }
    }

    componentDidMount(){
        ArticleService.getArticleArchive().then(
            res => {
                this.setState({articles:res.data})
            }
        
        )
        console.log(this.state.articles)

    }



    
    render() { 
        const groupedArticles=_.groupBy(this.state.articles, 'issueMonth')
        return ( 
             Object.keys(groupedArticles).map(cat => (
                <div  className="container">

                  <ul id="archive_list" className="list-group" >{cat}</ul>
                  {groupedArticles[cat].map(ord => (
                    
                      <li key={ord.id} className="list-group-item border-0"><a id="article_link" href={`/articles/${ord.id}`}>{ord.title}</a></li>
                
                    
                  ))}
                </div>
              ))
              )


           
    }
}
 
export default Archive;