import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  heroUnit: {
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: '8em 0 6em',
  },
  layout: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '8em 0',
  },
  cardGrid: {
    padding: '8em 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      books: [
        {
          name: "ガガ図鑑",
          thumbnail: "https://firebasestorage.googleapis.com/v0/b/cookpet-7b0b3.appspot.com/o/gaga.jpg?alt=media&token=40698005-e417-4eab-b9d6-54ba50915338"
        },
        {
          name: "ガ図鑑",
          thumbnail: "https://firebasestorage.googleapis.com/v0/b/cookpet-7b0b3.appspot.com/o/DSC_1218.JPG?alt=media&token=964c6eba-ac60-4d2f-a397-7afed03cea1f"
        }
      ]
    }
  }

  render() {
    const {classes} = this.props;
    const cards = this.state.books;
    return(
      <main>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              図鑑（と人生）
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              地球上には140万種の動物と30万種の植物がいます．
              そのうち何種類と生涯出会えるのでしょうか．
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              あなたが日常で出会う生き物を一つの図鑑にしてみて下さい．
              専門家じゃなくたって図鑑は作れます．
              あなたの言葉であなたが書きたいことを書けばいいんです．
            </Typography>
          </div>
        </div>
        <div className={classes.layout}>
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.thumbnail}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="headline" component="h2">
                      {card.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    );
  }
}


export default withStyles(styles)(Home);
