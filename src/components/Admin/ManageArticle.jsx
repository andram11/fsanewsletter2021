import React from 'react';
import { useHistory } from 'react-router-dom';
import './ManageArticle.css'


export default function ManageArticle() {


      let history = useHistory();

      function viewUploadArticlePage() {
        history.push("/upload");
      }

      function viewUpdateArticlePage(){
        history.push("/update");
      }

      function viewDeleteArticlePage(){
        history.push("/delete");
      }
  return(
  <div id="mainContainer">
<p>


  <button className="btn btn-primary" type="button" onClick={viewUploadArticlePage}>
    Upload  Article
  </button>
  <button className="btn btn-primary" type="button" onClick={viewUpdateArticlePage}>
    Update  Article
  </button>
  <button className="btn btn-primary" type="button" onClick={viewDeleteArticlePage}>
    Delete  Article
  </button>
</p>

  </div>
   
  );
}