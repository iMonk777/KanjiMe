import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
// import {color} from '../../Styles/Color';

// console.warn(color);
export default class CharacterGroup extends Component {
  render() {
    return (
      <View pressHandle={null}>
        <Text> textInComponent </Text>
        <Icon
          name={'right'}
          type={'AntDesign'}
          // style={{fontSize: 20, color: color[0].tilesIcon}}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   CharacterGroup: {
//     backgroundColor: Colors[0].tilesIcon,
//   },
// });
