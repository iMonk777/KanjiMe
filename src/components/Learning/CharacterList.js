import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {defaultCharacterGroups} from './../../storage/defaultCharacterGroups';
import {color} from './../../Styles/Color';
import Tile from './Tile';

export default class CharacterList extends Component {
  state = {
    tilecontent: 'name',
  };
  render() {
    let characterss = defaultCharacterGroups.filter(obj => {
      return (
        obj.name ==
        this.props.navigation.getParam('characterList', 'defaultValue')
      );
    })[0].characters;
    console.log(color);
    return (
      <View style={styles.container}>
        <FlatList
          data={characterss}
          columnWrapperStyle={styles.columnStyle}
          numColumns={5}
          renderItem={({item}) => (
            <Tile name={item.name} reading={item.reading}></Tile>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: '1%',
  },
  columnStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

// this.props.navigation.getParam('characterList', 'defaultValue')
