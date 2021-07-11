import React ,{ useState }from 'react';
import {Redirect} from 'react-router-dom'
import './ManageArticle.css'
import ArticleService from '../../services/ArticleService'

async function uploadArticle(article) 
{ return ArticleService.createArticle(article).then(res => res.data)
}


export default function ManageArticle() {

 const [title, setTitle]= useState()
  const [preview, setPreview]= useState()
  const [body, setBody]= useState()
  const [author, setAuthor]= useState()
  const [issueMonth, setIssueMonth]= useState()
  const [issueYear, setIssueYear]= useState()
  const [currentIssue, setCurrentIssue]= useState()

  const resetForm = () => {
   setTitle('')
   setPreview('')
   setBody('')
   setAuthor('')
   setIssueMonth('')
   setIssueYear('')
   setCurrentIssue('')
  }
  


  const handleSubmit = async e => {
    e.preventDefault();
    const articleRequest= new FormData()
    articleRequest.append("title", title);
    articleRequest.append("preview", preview);
    articleRequest.append("body", body);
    articleRequest.append("author", author);
    articleRequest.append("issueMonth", issueMonth);
    articleRequest.append("issueYear", issueYear);
    articleRequest.append("currentIssue", currentIssue);

    const articleCreatedResponse = await uploadArticle(articleRequest);
    
    // return articleCreatedResponse
      alert(articleCreatedResponse)
      resetForm()
     
      
   
  }

  return(
  <div id="container">
 <p>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Upload New Article
  </button>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
    Update  Article
  </button>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
    Delete  Article
  </button>
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-block">
  <form id="manage_article_form"  onSubmit={handleSubmit} method="POST">
      <div className="form-group" id="createArticleForm">
      
    <label htmlFor="article_title">Title</label>
    <textarea value={title} className="form-control" id="article_title" rows="1" onChange={e=> setTitle(e.target.value)}></textarea>

    <label htmlFor="article_preview">Preview</label>
    <textarea value={preview} className="form-control" id="article_title" rows="2" onChange={e=> setPreview(e.target.value)}></textarea>

    <label htmlFor="article_body">Body</label>
    <textarea value={body} className="form-control" id="article_body" rows="10" onChange={e=> setBody(e.target.value)}></textarea>

    <label htmlFor="article_author">Author</label>
    <textarea value={author} className="form-control" id="article_body" rows="1" onChange={e=> setAuthor(e.target.value)}></textarea>

    <label htmlFor="article_month">Issue Month</label>
    <textarea value={issueMonth}className="form-control" id="article_month" rows="1" onChange={e=> setIssueMonth(e.target.value)}></textarea>

    <label htmlFor="article_year">Issue Year</label>
    <textarea value={issueYear} className="form-control" id="article_year" rows="1" onChange={e=> setIssueYear(e.target.value)}></textarea>

    <div className="input-group-prepend">
    <div className="input-group-text" id="currentIssueCheckBox">
      <input type="checkbox" aria-label="Checkbox for following text input" value={currentIssue} onChange={e=> setCurrentIssue(e.target.checked)}></input>
      <label htmlFor="article_issue">Current Issue</label>
    </div>
  </div>
    
      </div>
      <button className="btn btn-primary" type="submit" >Save new article</button>
    </form>


  </div>
</div>


  </div>
    

    
  );
}