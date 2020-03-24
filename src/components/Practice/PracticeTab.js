/*Example of React Native Video*/
import React, {Component} from 'react';
//Import React
import {Platform, StyleSheet, Text, View} from 'react-native';
//Import Basic React Native Component
import Video from 'react-native-video';
//Import React Native Video to play video
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
//Media Controls to control Play/Pause/Seek and full screen

export default class PracticeTab extends Component {
  state = {
    currentTime: 0,
    duration: 0,
    isFullScreen: false,
    isLoading: true,
    paused: false,
    playerState: PLAYER_STATES.PLAYING,
    screenType: 'content',
  };
  render() {
    return (
      <View>
        <Text> Praasd</Text>
      </View>
    );
  }
}
