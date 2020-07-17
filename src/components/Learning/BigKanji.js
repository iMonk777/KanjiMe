import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {color} from '../../Styles/Color';
import CustomGrid from './CustomGrid';
import Video from 'react-native-video';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    height: hp('19%'),
    aspectRatio: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.bigKanjiContainer,
    borderRadius: hp('1%'),
    padding: 0,
  },
  bigKanji: {
    fontSize: hp('14%'),
    lineHeight: hp('16%'),
    letterSpacing: -30,
    color: color.bigKanji,
  },
  kanjiVideo: {
    height: hp('14%'),
    width: hp('14%'),
    alignSelf: 'center',
  },
});
