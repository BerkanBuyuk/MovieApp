import {Dimensions, StyleSheet} from 'react-native';
import Constants from './Constants';

const deviceHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: Constants.baseColor,
    height: deviceHeight,
  },
});

export default Styles;
