import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {color} from '../../Styles/Color';
import {Icon} from 'native-base';
import SoundPlayer from 'react-native-sound-player';

export default class BigKanjiInfo extends Component {
  playSound = () => {
    console.log(this.props.audioFile);
    try {
      SoundPlayer.playSoundFile(this.props.audioFile, 'mp3');
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };
  render() {
    return (
      <View
        style={
          this.props.type == 'meaning'
            ? styles.meaningContainer
            : styles.container
        }>
        <View style={styles.infoLabelContainer}>
          <Text style={styles.infoLabelText}>{this.props.type}</Text>
        </View>
        {this.props.audioFile ? (
          <TouchableOpacity style={styles.audioButton} onPress={this.playSound}>
            <Icon
              style={styles.audioIcon}
              name={'headphones'}
              type={'MaterialCommunityIcons'}
              // style={styles.icons}
              onPress={null}
            />
          </TouchableOpacity>
        ) : null}

        <View style={styles.infoTextContainer}>
          {this.props.jpInfo != null ? (
            <Text style={styles.infoText}> {this.props.jpInfo} </Text>
          ) : null}
          {this.props.enInfo != null ? (
            <Text style={styles.infoText}> {this.props.enInfo} </Text>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 8,
    minHeight: 40,
    borderRadius: 16,
    backgroundColor: color.tiles,
    padding: 8,
    elevation: 2,
  },
  meaningContainer: {
    flex: 9,
    marginTop: 8,
    minHeight: 60,
    borderRadius: 16,
    backgroundColor: color.tiles,
    padding: 8,
    elevation: 2,
  },
  infoLabelContainer: {
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: color.header,
    position: 'absolute',
    alignSelf: 'flex-end',
    height: 16,
    justifyContent: 'center',
  },
  infoLabelText: {
    fontSize: 10,
    height: 16,
    marginLeft: 13,
    marginRight: 13,
    alignSelf: 'center',
    color: color.headerIcon,
  },
  infoTextContainer: {
    // borderColor: 'red',
    // borderWidth: 1,
    width: '85%',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  infoText: {
    fontSize: 20,
    justifyContent: 'center',
  },
  audioButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 5,
    top: 13,
    padding: 13,
    // borderWidth: 1,
  },
  audioIcon: {
    color: color.header,
  },
});
