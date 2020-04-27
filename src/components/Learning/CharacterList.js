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

    return (
      <View style={styles.container}>
        <FlatList
          data={characterss}
          columnWrapperStyle={styles.columnStyle}
          numColumns={5}
          renderItem={({item}) => (
            <Tile
              name={item.name}
              id={item.id}
              reading={item.reading}
              type={this.props.navigation.getParam(
                'characterList',
                'defaultValue',
              )}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 2.5,
    paddingRight: 2.5,
    paddingTop: 2.5,
    flex: 1,
    // borderWidth: 5,
  },
  columnStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

// this.props.navigation.getParam('characterList', 'defaultValue')
