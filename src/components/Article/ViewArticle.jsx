import React, { Component } from 'react';
import ArticleService from '../../services/ArticleService';
import ReactHtmlParser from 'react-html-parser'; 
import './ViewArticle.css'

class ViewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:this.props.match.params.id,
            article: {}
         }
    }

    componentDidMount(){
        ArticleService.getArticleById(this.state.id).then(
            res => {
                this.setState({article:res.data})
            }
        )
    }
        
    render() { 
        return ( <div className="container">
            <h1>{this.state.article.title}</h1>
            <p id="author">Written by {this.state.article.author}</p>
            <div className="wrapper">
            {/* <div dangerouslySetInnerHTML={{ __html: this.state.article.body }} /> */}
            <div> { ReactHtmlParser (this.state.article.body) } </div>
            </div>
            <p id="issueOf">Issue of {this.state.article.issueMonth} {this.state.article.issueYear}</p>
        </div> );
    }
}
 
export default ViewArticle;