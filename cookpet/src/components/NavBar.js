import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Popover, {PopoverAnimationVertical} from '@material-ui/core/Popover';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Login extends Component {

  handleClick(e) {
    e.preventDefault();
    this.props.onLogin();
  }

  render() {
    return(
      <Button
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
            <MenuItem primaryText="Profile" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Log out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}


class Navbar extends Component {
  render() {
    let titleStyle = {
      "color": "inherit",
      "text-decoration": "inherit"
    }
    return(
      <AppBar
        title={<Link to='/' style={titleStyle}>{this.props.title}</Link>}
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
