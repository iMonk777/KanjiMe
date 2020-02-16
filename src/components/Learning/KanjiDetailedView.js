import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {kanjiData} from './../../storage/kanjiData';
import {Icon} from 'native-base';
import BigKanji from './BigKanji';
import {color} from '../../Styles/Color';

const getKanjiData = kanjiId => {
  let kanji = kanjiData.filter(obj => {
    return obj.id == kanjiId;
  })[0];
  return kanji;
};

export default class KanjiDetailedView extends Component {
  state = {
    currentKanjiId: Number(
      this.props.navigation.getParam('kanjiId', 'defaultValue'),
    ),
    grid: true,
  };

  showNextKanji = () => {
    this.setState({
      currentKanjiId: this.state.currentKanjiId + 1,
    });
  };
  showPreviousKanji = () => {
    this.setState({
      currentKanjiId: this.state.currentKanjiId - 1,
    });
  };

  toggleGrid = () => {
    this.setState({
      grid: !this.state.grid,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.leftButtonsContainer}>
            <View style={styles.leftButtons}>
              <Icon
                name={'star-border'}
                type={'MaterialIcons'}
                style={styles.icons}
              />
            </View>
            <View style={styles.leftButtons}>
              <TouchableOpacity onPress={this.showPreviousKanji}>
                <Icon name={'left'} type={'AntDesign'} style={styles.icons} />
              </TouchableOpacity>
            </View>
            <View style={styles.leftButtons}>
              <TouchableOpacity onPress={this.toggleGrid}>
                <Icon
                  name={'border-outer'}
                  type={'MaterialIcons'}
                  style={styles.icons}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bigKanjiContainer}>
            <BigKanji
              kanji={getKanjiData(this.state.currentKanjiId).name}
              isGridActive={this.state.grid}></BigKanji>
          </View>
          <View style={styles.rightbuttonsContainer}>
            <View style={styles.rightButtons}></View>
            <View style={styles.rightButtons}>
              <TouchableOpacity onPress={this.showNextKanji}>
                <Icon name={'right'} type={'AntDesign'} style={styles.icons} />
              </TouchableOpacity>
            </View>
            <View style={styles.rightButtons}>
              <Icon
                name={'play-circle-outline'}
                type={'MaterialIcons'}
                style={styles.icons}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.infoGroup}></View>
          <View style={styles.infoGroup}></View>
          <View style={styles.infoGroup}></View>
          <View style={styles.infoGroup}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 160,
    flexDirection: 'row',
    backgroundColor: color.header,
  },
  leftButtonsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  leftButtons: {
    height: 40,
    aspectRatio: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  bigKanjiContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  rightbuttonsContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightButtons: {
    aspectRatio: 1,
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
  },
  icons: {
    alignSelf: 'center',
    fontSize: 30,
    color: color.headerIcon,
  },
  strokes: {
    borderColor: 'teal',
    borderWidth: 2,
  },
  bodyContainer: {
    borderColor: 'purple',
    borderWidth: 2,
    flex: 1,
  },
  infoGroup: {
    borderColor: 'grey',
    borderWidth: 2,
    height: 47,
    margin: 5,
  },
});

// <View>
//   <Text> {getKanjiData(this.state.currentKanjiId).name} </Text>
//   <Button title={'Next'} onPress={this.showNextKanji}></Button>
//   <Button title={'Previous'} onPress={this.showPreviousKanji}></Button>
// </View>
