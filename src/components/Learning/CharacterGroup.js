import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {styles} from '../../Styles/Layout';

// console.warn(color);
export default class CharacterGroup extends Component {
  render() {
    // console.warn(color[0].tilesIcon);
    let groupList = ['Hiragana', 'Katakana', 'Kanji', 'Favorites', 'My List'];
    return (
      <View>
        {groupList.map(element => (
          <View pressHandle={null} style={styles.characterGroupContainer}>
            <Text style={styles.characterGroupText}> {element} </Text>
            <Icon name={'right'} type={'AntDesign'} style={styles.icon} />
          </View>
        ))}
      </View>
    );
  }
}

// return (
//   <View>
//     <View pressHandle={null} style={styles.characterGroupContainer}>
//       <Text style={styles.characterGroupText}> Hiragana </Text>
//       <Icon name={'right'} type={'AntDesign'} style={styles.icon} />
//     </View>
//     <View pressHandle={null} style={styles.characterGroupContainer}>
//       <Text style={styles.characterGroupText}> Katakana </Text>
//       <Icon name={'right'} type={'AntDesign'} style={styles.icon} />
//     </View>
//     <View pressHandle={null} style={styles.characterGroupContainer}>
//       <Text style={styles.characterGroupText}> Kanji </Text>
//       <Icon name={'right'} type={'AntDesign'} style={styles.icon} />
//     </View>
//     <View pressHandle={null} style={styles.characterGroupContainer}>
//       <Text style={styles.characterGroupText}> Favorites </Text>
//       <Icon name={'right'} type={'AntDesign'} style={styles.icon} />
//     </View>
//   </View>
// );
