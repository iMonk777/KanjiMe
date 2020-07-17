import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {color} from '../../Styles/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    height: hp('6.5%'),
    width: '100%',
    elevation: 7,
    backgroundColor: color.tiles,
    borderRadius: hp('1.5%'),

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
    fontSize: hp('3%'),
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
