import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
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
  const style = {
    "height": "114vw",
    "width": "80vw",
    "padding-top": "20vh",
    "font-size": "3em",
    "color": "white",
    "text-shadow":
       "black -1px -1px 3px,"
      +"black -1px  0px 3px,"
      +"black -1px  1px 3px,"
      +"black  0px -1px 3px,"
      +"black  0px  1px 3px,"
      +"black  1px -1px 3px,"
      +"black  1px  0px 3px,"
      +"black  1px  1px 3px",
    "textAlign": "center",
    "display": "inline-block",
    "background-image": "url(../../DSC_1218.JPG)",
    "background-size": "cover",
    "margin": "20px"
  };

  return(
    <Paper style={style} zDepth={2} children={bookname}/>
  );
};


const Page = (props) => {
  const { page } = props.match.params;

  return(
    <div>
      <Card>
        <CardMedia
          overlay={<CardTitle title={page} />}
        >
          <img
            src="/DSC_0263.JPG"
            alt={page}
            style={{
              "width": "100%",
              "height": "50vh",
              "object-fit": "cover"
            }}
          />
        </CardMedia>
        <CardText>
          <RichEditor />
        </CardText>
      </Card>
    </div>
  );
};


export default Book;
