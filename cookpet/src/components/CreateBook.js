import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Redirect } from 'react-router';


export default class DialogExampleScrollable extends React.Component {
  state = {
    open: false,
    bookName: null,
    redirect: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    this.setState({redirect: true});
    this.handleClose();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={"/books/"+this.state.bookName} />;
    }

    const isDisabled = (typeof(this.state.bookName) !== 'string'
                        || this.state.bookName.length === 0);
    const actions = [
      <FlatButton
        label="キャンセル"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="作成"
        primary={true}
        disabled={isDisabled}
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <RaisedButton label="図鑑を作る" onClick={this.handleOpen} />
        <Dialog
          title="新規図鑑作成"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div>どんな図鑑にも名前はある．君の図鑑にも名前はある．</div>
          <TextField hintText="図鑑の名前" onChange={(e, v) => {this.setState({bookName: v})}} />
        </Dialog>
      </div>
    );
  }
}
