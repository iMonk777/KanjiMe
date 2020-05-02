import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {color} from './../../Styles/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import {kanjiData, fullKanjiIdList} from '../../storage/kanjiData';
import AsyncStorage from '@react-native-community/async-storage';

class KanjiOfTheDay extends Component {
  state = {
    data: null,
  };

  showKanjiDetails = () => {
    if (this.state.data) {
      this.props.navigation.navigate('KanjiDetailedView', {
        kanjiId: this.state.data,
      });
    }
  };

  getData = async () => {
    try {
      const kanjiListAsyncStorage = await AsyncStorage.getItem('kanjiIdList');
      let kanjiIdList = JSON.parse(kanjiListAsyncStorage);

      const pastDateListAsyncStorage = await AsyncStorage.getItem(
        'pastDateList',
      );
      const pastDateList = JSON.parse(pastDateListAsyncStorage);

      let todaysKanji = await AsyncStorage.getItem('todaysKanji');
      let today = Math.floor(Date.now() / (1000 * 3600 * 24));
      if (kanjiIdList === null || kanjiIdList.length === 0) {
        this.storeData('kanjiIdList', fullKanjiIdList);
        this.storeData('pastDateList', `[${today}]`);
        this.storeData('todaysKanji', '5');
        return 5;
      } else {
        let randomKanji = Math.floor(Math.random() * kanjiIdList.length);

        if (pastDateList.indexOf(Number(today)) === -1) {
          todaysKanji = kanjiIdList[randomKanji];
          pastDateList.push(today);
          kanjiIdList.splice(kanjiIdList.indexOf(todaysKanji), 1);

          this.storeData('kanjiIdList', JSON.stringify(kanjiIdList));
          this.storeData('pastDateList', JSON.stringify(pastDateList));
          this.storeData('todaysKanji', JSON.stringify(todaysKanji));
        }
        return String(todaysKanji);
      }
    } catch (e) {
      console.log(e);
    }
  };

  storeData = async (name, value) => {
    try {
      await AsyncStorage.setItem(name, value);
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    const data = await this.getData();
    if (data) {
      this.setState({data});
    }
  }

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.showKanjiDetails}
          style={styles.touchable}>
          <View style={styles.textContainer}>
            <Text style={styles.labelText}>Kanji of the day</Text>
          </View>
          <View style={styles.kanjiContainer}>
            {data ? (
              <Text style={styles.kanjiText}>{kanjiData[data].name}</Text>
            ) : null}
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
