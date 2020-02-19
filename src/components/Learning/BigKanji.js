import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {color} from '../../Styles/Color';
import CustomGrid from './CustomGrid';

export default class BigKanji extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigKanji}> {this.props.kanji} </Text>
        {this.props.isGridActive == true ? (
          <CustomGrid style={{position: 'absolute'}}></CustomGrid>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    aspectRatio: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: color.bigKanjiContainer,
    borderRadius: 10,
  },
  bigKanji: {
    fontSize: 100,
    textAlign: 'center',
    color: color.bigKanji,
  },
});
