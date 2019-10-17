import React, { Component } from 'react';
import '../../../css/style.css';
import './Navbar.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProfileImage from '../../Profile/ProfileImage'
import logo from './images/ElectraLogo.png';


export default class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    }
  }

  handleClick = event => {
    event.preventDefault(); 
    this.props.onSignup();
  }

  handleLoginClick = event => {
    this.props.onLogin(); 
  }

  render() {
    return (
     
      // From the header down, I changed the routing of the nav bar. We have the links here
      //but in the app is where the routes take place. 
      <header>
      <nav>
        <ul>
          <li id="logo"><Link to="/"><img id="logo-img" src={logo} alt="Electra Logo" /></Link> </li>
          <li id="critiques"><Link to="/" >Critiques</Link></li>
          <li id="gallery"> <Link to="/">Gallery</Link> </li>

          {this.props.profilePic ? <li> <ProfileImage showPic={this.props.profilePic} /> </li> :

            <li id="profile">
              <button className="signup-login" onClick={this.handleClick}>Login | Sign Up</button>
            </li>} 

        </ul>
      </nav>
    </header>
   
    )
  }
}
