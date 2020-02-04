import {StyleSheet} from 'react-native';
import {color} from './Color';

export const styles = StyleSheet.create({
  characterGroup: {
    backgroundColor: color[0].tiles,
  },
  icon: {
    fontSize: 20,
    color: color[0].tileIcon,
  },
});
