import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {color} from './../../Styles/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import {kanjiData} from '../../storage/kanjiData';

class KanjiOfTheDay extends Component {
  showKanjiDetails = () => {
    this.props.navigation.navigate('KanjiDetailedView', {
      kanjiId: this.kanjiOfTheDayId,
    });
  };
  kanjiOfTheDayId = Math.round(Math.random() * 1234);
  render() {
    console.warn(this.kanjiOfTheDayId);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.showKanjiDetails}
          style={styles.touchable}>
          <View style={styles.textContainer}>
            <Text style={styles.labelText}>Kanji of the day</Text>
          </View>
          <View style={styles.kanjiContainer}>
            <Text style={styles.kanjiText}>
              {kanjiData[this.kanjiOfTheDayId].name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(KanjiOfTheDay);

const styles = StyleSheet.create({
  container: {
    height: 200,
    margin: 6,
    // borderWidth: 1,
    elevation: 7,
    backgroundColor: color.tiles,
    borderRadius: 15,
  },
  touchable: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    // borderWidth: 1,
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kanjiContainer: {
    // borderWidth: 1,
    // height: '100%',
    flex: 1,
    justifyContent: 'center',
    margin: 15,
    backgroundColor: color.background,
    borderRadius: 15,
  },
  labelText: {
    // borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 35,
    width: 150,
    color: color.header,
    // fontWeight: 'bold',
  },
  kanjiText: {
    // borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 110,
    color: color.header,
  },
});
