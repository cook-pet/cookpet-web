import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RichEditor from './components/RichEditor'
import './css/RichEditor.css';


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


const Cover = (props) => {
  const { bookname } = props.match.params
  return(
    <Card>
      <CardMedia
        overlay={<CardTitle title={bookname} />}
      >
        <img src="/DSC_0263.JPG" alt="" />
      </CardMedia>
    </Card>
  );
};


const Page = (props) => {
  const { page } = props.match.params
  return(
    <div>
      <h1>{ page }</h1>
      <RichEditor />
    </div>
  );
};


export default Book;
