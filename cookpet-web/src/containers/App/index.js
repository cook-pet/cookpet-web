import React, { Component } from 'react';
import * as firebase from "firebase";
import config from './firebase-config';

class App extends Component {
  constructor() {
    super();
    firebase.initializeApp(config);
    this.state = {
      user: {displayName: "taro", email: "taro@taro"}
    };
  }

  handleLogin = (event) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      let user = firebase.auth().currentUser;
      if(user != null) {
        this.setState({
          user: {
            displayName: user.displayName,
            email: user.email
          }
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  handleLogout = (event) => {
    this.setState({
      user: null
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.children && React.cloneElement(this.props.children, {
          firebaseFirestore: firebase.firestore(),
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          user: this.state.user
        })}
      </div>
    );
  }
}

export default App;