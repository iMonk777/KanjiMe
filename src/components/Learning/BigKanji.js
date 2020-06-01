import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {color} from '../../Styles/Color';
import CustomGrid from './CustomGrid';
import Video from 'react-native-video';

export default class BigKanji extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.showVideo === false ? (
          <Text style={styles.bigKanji}> {this.props.kanji} </Text>
        ) : (
          <Video
            source={this.props.video}
            onError={this.videoError} // Callback when video cannot be loaded
            style={styles.kanjiVideo}
            autoPlay={true}
            resizeMode={'contain'}
            onEnd={null}
          />
        )}

        {this.props.isGridActive == true ? (
          <CustomGrid style={{position: 'absolute'}} />
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
  kanjiVideo: {
    height: '80%',
    width: '80%',
    alignSelf: 'center',
  },
});
