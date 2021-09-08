import React ,{ useState, useRef, useEffect}from 'react';
import { useHistory } from 'react-router-dom';
import './ManageArticle.css'
import ArticleService from '../../services/ArticleService'



async function getArticleById(articleId) 
{ return ArticleService.getArticleById(articleId).then(res =>res.data)
}

async function updateArticle(articleId, updatedArticle) 
{ return ArticleService.updateArticle(articleId, updatedArticle).then(res => res.data)
} 

export default function UpdateArticle(){

    //STATE
  const [article, setArticle]=useState([])
  const [id, setId]=useState()

  const [title, setTitle]= useState()
  const titleField = useRef(null)

  const [preview, setPreview]= useState()
  const previewField = useRef(null)

  const [body, setBody]= useState()
  const bodyField = useRef(null)

  const [author, setAuthor]= useState()
  const authorField = useRef(null)

  const [issueMonth, setIssueMonth]= useState()
  const issueMonthField = useRef(null)

  const [issueYear, setIssueYear]= useState()
  const issueYearField = useRef(null)

  const [currentIssue, setCurrentIssue]= useState()
  const currentIssueField = useRef(null)
  let history = useHistory();

  //Update article state with existing article details
  function addArticle(article){
    setArticle([article])
  }

  const resetForm = () => {
   setId('')
   setTitle('')
   setPreview('')
   setBody('')
   setAuthor('')
   setIssueMonth('')
   setIssueYear('')
   setCurrentIssue('')
   history.push("/admin")
  }
  
  //PATCH/UPDATE an EXISTING ARTICLE
     const handleUpdateArticleRetrieval = async e=>{
      e.preventDefault();
      const articleToUpdate=await getArticleById(id);
      addArticle(articleToUpdate);
    
     }
     const handleUpdate = async e => {
      e.preventDefault();
      const updateArticleRequest= new FormData()
      updateArticleRequest.append("id", id);
      updateArticleRequest.append("title", title);
      updateArticleRequest.append("preview", preview);
      updateArticleRequest.append("body", body);
      updateArticleRequest.append("author", author);
      updateArticleRequest.append("issueMonth", issueMonth);
      updateArticleRequest.append("issueYear", issueYear);
      updateArticleRequest.append("currentIssue", currentIssue);
      console.log(updateArticleRequest)
  
      const updatedArticleCreatedResponse = await updateArticle(id,updateArticleRequest);
      
      // return articleCreatedResponse
        alert(updatedArticleCreatedResponse)
        resetForm()
       }

       //Handles auto-fill by checking at a specific interval that a field is filled in, otherwise the request send to backend will be empty
       useEffect(() => {
        let interval = setInterval(() => {
          if (titleField.current) {setTitle(titleField.current.value)
            clearInterval(interval)
          }
            if (previewField.current){setPreview(previewField.current.value)
              clearInterval(interval)}
            if (bodyField.current){setBody(bodyField.current.value)
              clearInterval(interval)}
            if (authorField.current) {setAuthor(authorField.current.value)
              clearInterval(interval)}
            if (issueMonthField.current){setIssueMonth(issueMonthField.current.value)
              clearInterval(interval)}
            if (issueYearField.current){setIssueYear(issueYearField.current.value)
              clearInterval(interval)}
            // if (currentIssueField.current){setCurrentIssue(currentIssueField.current.value)
            //   clearInterval(interval)}
            
          
        }, 100)
      })

      //Handles the currentIssue flag
      function handleCheck() {
        
        let checkCurrentIssue=!document.getElementById("currentIssue").defaultChecked;
        setCurrentIssue(checkCurrentIssue);
      }
      
      return(
        <div id="container">
            <div className="card card-block">

<form id="retrieve_article_form"  onSubmit={handleUpdateArticleRetrieval} method="GET">
    <div className="form-group" id="createArticleForm">

<label htmlFor="article_title2">Article Id</label>
  <textarea className="form-control" id="retrieve_article_id" rows="1"onChange={e=> setId(e.target.value)}></textarea>
    </div>
    <button className="btn btn-primary" type="submit" >Retrieve article details</button>
    </form>
    </div>

{article.map(articleItem => 
<div key={articleItem.id} className="card card-block">
<form id="update_article_form"  onSubmit={handleUpdate} method="PATCH">
    <div className="form-group" id="createArticleForm">

  <label htmlFor="article_title">Article Id</label>
  <textarea className="form-control" id="article_id" rows="1" onChange={e=> setId(e.target.value)}>{articleItem.id}</textarea>
    
  <label htmlFor="article_title">Title</label>
  <textarea ref= {titleField} name= "title" className="form-control" id="article_title" rows="1" onBlur={e=> setTitle(e.target.value)}>{articleItem.title}</textarea>

  <label htmlFor="article_preview">Preview</label>
  <textarea  ref={previewField} name="preview" className="form-control" id="article_preview2" rows="2" onBlur={e=> setPreview(e.target.value)}>{articleItem.preview}</textarea>

  <label htmlFor="article_body">Body</label>
  <textarea ref= {bodyField} className="form-control" id="article_body" rows="10" onChange={e=> setBody(e.target.value)}>{articleItem.body}</textarea>

  <label htmlFor="article_author">Author</label>
  <textarea ref={authorField} className="form-control" id="article_author" rows="1" onChange={e=> setAuthor(e.target.value)}>{articleItem.author}</textarea>

  <label htmlFor="article_month">Issue Month</label>
  <textarea ref={issueMonthField} className="form-control" id="article_month" rows="1" onChange={e=> setIssueMonth(e.target.value)}>{articleItem.issueMonth}</textarea>

  <label htmlFor="article_year">Issue Year</label>
  <textarea ref={issueYearField}  className="form-control" id="article_year" rows="1" onChange={e=> setIssueYear(e.target.value)}>{articleItem.issueYear}</textarea>

  <div className="input-group-prepend">
  <div className="input-group-text" id="currentIssueCheckBox">
    <input id="currentIssue" ref={currentIssueField} type="checkbox" aria-label="Checkbox for following text input"  defaultChecked={articleItem.currentIssue} onChange={handleCheck}></input>
    <label htmlFor="article_issue">Current Issue</label>


  </div>
</div>
  
  
    </div>
    <button className="btn btn-primary" type="submit" >Update article</button>
  </form>


</div>)}
        </div>
      )
  
    

}

