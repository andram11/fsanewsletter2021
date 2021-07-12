import React from 'react';
import axios from 'axios';
import './IdeaBoxForm.css'

class IdeaBoxForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      // url:"http://localhost:3002/send",
      url:"https://email.intysfsanewsletter.be/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Your message has been sent.");
        this.resetForm()
        this.props.history.push('/')
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return(
        
      <div className="App">
          <h5 id="ideaHeading">You have an idea for the FSA practice? Tell us all about it and let's see if we can turn it into reality!</h5>
        <form id="idea-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group" id="ideaBody">
              <label htmlFor="name">Full Name</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group" id="ideaBody">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group" id="ideaBody">
              <label htmlFor="message">Your idea</label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button id= "sendIdea" type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default IdeaBoxForm;