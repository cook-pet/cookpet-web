import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'


class Book extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path='/books/:bookname' component={Cover} />
          <Route path='/books/:bookname/:page' component={Page} />
        </div>
      </BrowserRouter>
    );
  }
}


const Cover = () => {
  return(
    "cover"
  );
};


const Page = (props) => {
  const { page } = props.match.params
  return(
    <h1>{ page }</h1>
  );
};


export default Book;
