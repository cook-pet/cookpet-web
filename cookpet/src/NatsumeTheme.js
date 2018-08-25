import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { gray800,
         deepPurple600,
         deepPurple800,
         pinkA200 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple800,
    primary2Color: deepPurple600,
    primary3Color: gray800,
    accent1Color: pinkA200,
    // accent2Color: grey100,
    // accent3Color: grey500,
    // textColor: darkBlack,
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: fullBlack,
  },
  // appBar: {
    // height: 80,
  // },
  });

export default muiTheme;
