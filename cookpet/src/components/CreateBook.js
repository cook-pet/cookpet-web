import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router';


export default class CreateBookDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      bookName: null,
      redirect: false
    };
  }

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
      <Button
        label="キャンセル"
        primary={true}
        onClick={this.handleClose}
      />,
      <Button
        label="作成"
        primary={true}
        disabled={isDisabled}
        onClick={this.handleSubmit}
      />,
    ];

    return(
      <div>
        <Button label="図鑑を作る" onClick={this.handleOpen} />
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
