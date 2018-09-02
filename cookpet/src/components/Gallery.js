import React from 'react';
import {GridList, GridTile} from '@material-ui/core/GridList';


export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>December</Subheader>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    }
  }
}
