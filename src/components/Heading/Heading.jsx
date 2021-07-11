import React, { Component } from 'react';
import temp_logo from './../../images/Logo_FSA_PNG.png'
import './Heading.css'

class Heading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="header" >
                <a href="/"><img src={temp_logo} alt="" width="100" height="65" ></img></a>
                {/* <h6>July 2021</h6> */}
                <a href="/"><h1>FSA Times</h1></a>
                {/* <img src={temp_logo} alt="" width="110" height="80" ></img> */}
                <p id="issue">July 2021</p>
            </div>
        );
    }
}
 
export default Heading;