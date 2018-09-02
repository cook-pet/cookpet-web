import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import firebase from './components/firebase'
import Home from './Home'
import Book from './Book'
import User from './User'
import './css/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '夏目漱石記念館',
      user: {
        displayName: null,
        email: null,
        photoURL: null
      }
    };
  }

  handleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        let user = firebase.auth().currentUser;
        if(user != null) {
          this.setState({
            user: {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL
            }
          });
        }
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    return(
      <React.Fragment>
        <NavBar
          title={this.state.title}
          user={this.state.user}
          onLogin={() => this.handleLogin()}
        />

        <Route exact path='/' component={Home} />
        <Route path='/user/:username' component={User} />
        <Route path='/books/:bookname' component={Book} />
      </React.Fragment>
    );
  }
}


export default App;
