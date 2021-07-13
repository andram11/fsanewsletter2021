import React, { Component } from 'react'
import ArticleService from '.././..//services/ArticleService';
import './HomePage.css'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { articles:[]  }

       
    }

    componentDidMount(){
        ArticleService.getArticles().then( res => {
                this.setState({articles:res.data})
        })
        
    }

    viewArticle(id) {
        this.props.history.push(`/articles/${id}`)
    }
    render() { 
        return (
        
        <div>
           <div id="image_heading"></div>
           <div id="card_events" className="float-lg-right border-1">
                
                <h5 id= "event_title" >Upcoming events</h5>
                 <ul className="list-group list-group-flush">
                          <li className="list-group-item active" aria-current="true">9th of September: Intys Convention</li>
                         <li className="list-group-item">13th of September: Practice Meeting</li>
                         <li className="list-group-item">End September: FSA Newsletter Quarter 3</li>
                         <li className="list-group-item">October: FSA Values Project 1</li>
                         <li className="list-group-item">November: FSA Values Project 2</li>
                         <li className="list-group-item">December: FSA Values Project 3</li>
                         <li className="list-group-item">End December: Practice Meeting</li>
                         <li className="list-group-item">End December: FSA Newsletter Quarter 4</li>
                         
                 </ul> 
             
                 </div>   
            <p id="latest_issue">Here's what's new in our latest issue... </p>
                            {this.state.articles.map(
                                article =>
                                <div key={article.id} className="card ">
                                <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.preview}</p>
                                <button  onClick={() => this.viewArticle(article.id)} className="btn btn-primary">Read More</button>
                                </div>

                 </div>
                            )}


           
    
        </div>
        
        );
    }
}
 
export default HomePage;