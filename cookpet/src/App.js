import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import Book from './Book'
import Author from './Author'
import './css/App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/author/:authorname' component={Author} />
          <Route path='/books/:bookname' component={Book} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
