import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Popover, {PopoverAnimationVertical} from '@material-ui/core/Popover';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Login extends Component {

  handleClick(e) {
    e.preventDefault();
    this.props.onLogin();
  }

  render() {
    return(
      <Button onClick={(e) => this.handleClick(e)} color="inherit">LOGIN</Button>
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
      <React.Fragment>
        <IconButton
          aria-owns={this.state.open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
        >
          <Avatar src={this.props.user.photoURL}/>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={this.state.anchorEl}
          anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
          transformOrigin={{vertical: 'top', horizontal: 'right'}}
          open={this.state.open}
          onClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>Log out</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}


class Navbar extends Component {
  render() {
    const {classes} = this.props;
    let titleStyle = {
      "color": "inherit",
      "text-decoration": "inherit"
    }
    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              夏目漱石記念館
            </Typography>
            {
              this.props.user.displayName ? <Logged user={this.props.user} />
                                          : <Login onLogin={()=>this.props.onLogin()} />
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}


export default withStyles(styles)(Navbar);
