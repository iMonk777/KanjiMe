import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {color} from '../../Styles/Color';

const CreditsButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={props.onPressHandler}>
        <Text style={styles.creditsText}>Credits</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    elevation: 7,
    backgroundColor: color.tiles,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 6,
    alignSelf: 'center',
  },
  creditsText: {
    width: '100%',
    textAlign: 'center',
    // fontFamily: 'Lato',
    fontSize: 24,
    color: color.header,
  },
  touchable: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreditsButton;
