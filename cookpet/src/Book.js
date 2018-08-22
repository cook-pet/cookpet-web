import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
// import FormatSize from 'material-ui/svg-icons/editor/format-size';
// import FormatBold from 'material-ui/svg-icons/editor/format-bold';
// import FormatItalic from 'material-ui/svg-icons/editor/format-italic';
// import FormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted';
// import FormatListNumbered from 'material-ui/svg-icons/editor/format-list-numbered';
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


const Cover = () => {
  return(
    "cover"
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
