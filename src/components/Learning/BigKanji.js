import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {color} from '../../Styles/Color';
import CustomGrid from './CustomGrid';
import Video from 'react-native-video';

export default class BigKanji extends Component {
  // videoSource = require('./../../storage/videos/(afurika)zou_00.mp4')
  render() {
    let videoUrl = `./../../storage/videos/${this.props.videoName}_00.mp4`;
    let videoSource = require('./../../storage/videos/(afurika)zou_00.mp4');
    console.log(videoUrl);

    return (
      <View style={styles.container}>
        {/* <Text style={styles.bigKanji}> {this.props.kanji} </Text>
        {this.props.isGridActive == true ? (
          <CustomGrid style={{position: 'absolute'}}></CustomGrid>
        ) : null} */}
        <Video
          source={this.props.video} // Can be a URL or a local file.
          // ref={ref => {
          //   this.player = ref;
          // }} // Store reference
          // onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.kanjiVideo}
          autoPlay={true}
          resizeMode={'contain'}
        />
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
    borderWidth: 1,
    height: 100,
    width: 100,
  },
});
