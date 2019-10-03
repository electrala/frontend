import React from 'react';
import './App.css';
import '../css/style.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';
import Navbar from './common/Navbar/Navbar';
import UploadCrit from './UploadCrit/UploadCrit';
import Signup from './Signup/Signup';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCrit: false,
      showUser: false,
      critiques: [],
    };
  }

  showCritModal = event => {
    event.preventDefault();
    this.setState({
      showCrit: true,
    });
  }

  closeCritModal = event => {
    event.preventDefault();
    this.setState({
      showCrit: false,
    })
  }

  showModal = event => {
    event.preventDefault();
    this.setState({
      show: true,
    });
  }

  closeSignUpModal = event => {
    event.preventDefault();
    this.setState({
      show: false,
    })
  }

  showUserModal = event => {
    this.setState({
      showUser: true,
    });
  }

  closeUserModal = event => {
    this.setState({
      showUser: false,
    });
  }

  uploadCrit = async data => {
    const new_crit = await axios.post('http://localhost:5000/critiques/new', data);
    const crits = this.state.critiques;
    crits.push(new_crit);
    this.setState({
      critiques: crits,
    })
  }

  signUp = async data => {
    const new_user = await axios.post('http://localhost:5000/users/register', data);
    const new_user_data = JSON.parse(new_user.config.data);
    console.log(new_user_data);
    // const userName = new_user.config.data.userName;
    // const password = new_user.config.data.password;
    // console.log(`Username: ${userName} | Password: ${password}`);
  }

  render() {
    return (
      <Router>
        <Navbar onSignup={this.showUserModal}/>
        <Modal show={this.state.showCrit} onClose={this.closeCritModal}>
          <UploadCrit onUpload={this.uploadCrit} />
        </Modal>
        <Modal show={this.state.showUser} onClose={this.closeUserModal}>
          <Signup createUser={this.signUp}/>
        </Modal>
        
        <div id="float-button">
          <button onClick={this.showCritModal}>
            <img src={require('./plusSign.png')} alt="plus sign for upload" />
          </button>
        </div>
        <Route path="/" exact component={Gallery} />
      </Router>
    );
  }
}

export default App;
