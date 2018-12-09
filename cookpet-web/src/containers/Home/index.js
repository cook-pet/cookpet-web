import React, {Component} from 'react';
import MenuAppBar from '../../components/MenuAppBar';
import RecipeThumbnail from '../../components/RecipeThumbnail';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const styles = theme => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
});

class Home extends Component {
  render() {
    const { classes, ...otherprops } = this.props;
    return (
      <div className="Home">
        <MenuAppBar {...otherprops} />
        <div className={classes.cardGrid}>
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <RecipeThumbnail />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
