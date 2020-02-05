import {StyleSheet} from 'react-native';
import {color} from './Color';

export const styles = StyleSheet.create({
  characterGroupContainer: {
    backgroundColor: color[0].tiles,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    height: 54,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    fontSize: 32,
    color: color[0].tileIcon,
    flex: 1,
  },
  characterGroupText: {
    fontFamily: 'Lato',
    fontSize: 24,
    width: 173,
    flex: 8,
  },
});
