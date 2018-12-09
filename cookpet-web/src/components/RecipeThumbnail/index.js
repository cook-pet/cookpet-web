import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  media: {
    objectFit: "cover",
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const RecipeThumbnail = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="ゲンゴロウカレー"
        image="https://firebasestorage.googleapis.com/v0/b/cookpet-7b0b3.appspot.com/o/gaga.jpg?alt=media&token=40698005-e417-4eab-b9d6-54ba50915338"
        title="ゲンゴロウカレー"
        className={classes.media}
        height="200"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          ゲンゴロウカレー
        </Typography>
        <Typography>
          うまいぞ
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(RecipeThumbnail);
