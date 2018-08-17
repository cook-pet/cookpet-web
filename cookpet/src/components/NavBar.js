import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Weekend from 'material-ui/svg-icons/content/weekend';
import BlurOn from 'material-ui/svg-icons/image/blur-on';
import NaturePeople from 'material-ui/svg-icons/image/nature-people';

class Login extends Component {
  static muiName = 'FlatButton';

  handleClick(e) {
    e.preventDefault();
    this.props.onLogin();
  }

  render() {
    return(
      <FlatButton
        {...this.props}
        onClick={(e) => this.handleClick(e)}
        label="Login"
      />
    );
  }
}

class Logged extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return(
      <div>
        <Avatar src={this.props.user.photoURL} onClick={this.handleClick} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Profile" rightIcon={<Weekend />}/>
            <MenuItem primaryText="Settings" rightIcon={<NaturePeople />} />
            <MenuItem primaryText="Log out" rightIcon={<BlurOn />} />
          </Menu>
        </Popover>
      </div>
    );
  }
}


class Navbar extends Component {
  render() {
    return(
      <AppBar
        title={this.props.title}
        showMenuIconButton={false}
        iconElementRight={this.props.user.displayName ?
                          <Logged user={this.props.user} /> :
                          <Login onLogin={()=>this.props.onLogin()} />
        }
      />
    )
  }
}


export default Navbar;
