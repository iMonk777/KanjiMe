import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {kanjiData} from './../../storage/kanjiData';
import {Icon} from 'native-base';
import BigKanji from './BigKanji';
import {color} from '../../Styles/Color';
import BigKanjiInfo from './BigKanjiInfo';

// import Videos from './../../storage/videos/(afurika)zou_00.mp4'

// const getKanjiData = kanjiId => {
//   let kanji = kanjiData.filter(obj => {
//     return obj.id == kanjiId;
//   })[0];
//   return kanji;
// };

export default class KanjiDetailedView extends Component {
  state = {
    currentKanjiId: Number(
      this.props.navigation.getParam('kanjiId', 'defaultValue'),
    ),
    grid: true,
    paused: false,
    showVideo: false,
    paused: false,
  };

  showNextKanji = () => {
    this.setState({
      currentKanjiId: this.state.currentKanjiId + 1,
      showVideo: false,
    });
  };
  showPreviousKanji = () => {
    this.setState({
      currentKanjiId: this.state.currentKanjiId - 1,
      showVideo: false,
    });
  };

  toggleGrid = () => {
    this.setState({
      grid: !this.state.grid,
    });
  };

  videoError = error => {
    console.log(error);
  };

  playAnimation = () => {
    this.setState({
      showVideo: true,
    });
  };

  stopAnimation = () => {
    this.setState({
      showVideo: false,
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
              kanji={kanjiData[this.state.currentKanjiId].name}
              isGridActive={this.state.grid}
              videoName={kanjiData[this.state.currentKanjiId].kData}
              video={kanjiData[this.state.currentKanjiId].kVideo}
              showVideo={this.state.showVideo}></BigKanji>
          </View>
          <View style={styles.rightbuttonsContainer}>
            <View style={styles.rightButtons}>
              {this.state.showVideo == true ? (
                <TouchableOpacity>
                  <Icon
                    name={'format-text'}
                    type={'MaterialCommunityIcons'}
                    style={styles.icons}
                    onPress={this.stopAnimation}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
            <View style={styles.rightButtons}>
              <TouchableOpacity onPress={this.showNextKanji}>
                <Icon name={'right'} type={'AntDesign'} style={styles.icons} />
              </TouchableOpacity>
            </View>
            <View style={styles.rightButtons}>
              <TouchableOpacity>
                <Icon
                  name={'play-circle-outline'}
                  type={'MaterialIcons'}
                  style={styles.icons}
                  onPress={this.playAnimation}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <ScrollView style={{flex: 1, width: '100%'}}>
            <BigKanjiInfo
              type={'kun.'}
              jpInfo={kanjiData[this.state.currentKanjiId].kunyomi_ja}
              // enInfo={kanjiData[this.state.currentKanjiId - 1].kunyomi}
            ></BigKanjiInfo>
            <BigKanjiInfo
              type={'on.'}
              jpInfo={kanjiData[this.state.currentKanjiId].onyomi_ja}
              // enInfo={kanjiData[this.state.currentKanjiId - 1].onyomi}
            ></BigKanjiInfo>
            <BigKanjiInfo
              type={'meaning'}
              jpInfo={null}
              enInfo={
                kanjiData[this.state.currentKanjiId].kmeaning
              }></BigKanjiInfo>

            {JSON.parse(kanjiData[this.state.currentKanjiId].examples).map(
              (example, index) => (
                <BigKanjiInfo
                  key={index}
                  type={`example ${index + 1}`}
                  jpInfo={example[0]}
                  enInfo={example[1]}
                  audioFile={
                    'audio_' +
                    kanjiData[this.state.currentKanjiId].kAudio +
                    '_06_' +
                    String.fromCharCode(97 + index)
                  }></BigKanjiInfo>
              ),
            )}
          </ScrollView>
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
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: 8,
    paddingRight: 8,
  },
});

// <View>
//   <Text> {getKanjiData(this.state.currentKanjiId).name} </Text>
//   <Button title={'Next'} onPress={this.showNextKanji}></Button>
//   <Button title={'Previous'} onPress={this.showPreviousKanji}></Button>
// </View>
