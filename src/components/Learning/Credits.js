import React from 'react';
import {View, Text, Linking, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Icon} from 'native-base';
import {color} from './../../Styles/Color';

const goToLink = source => {
  Linking.openURL(source);
};

const Credits = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Special thanks to:</Text>
      <Text />
      <TouchableOpacity
        onPress={() => {
          goToLink('https://app.kanjialive.com/api/docs');
        }}
        style={styles.touchable}>
        <Text style={styles.text}>
          Kanji Alive for their great resources and documentation. Find out more
          about them at https://app.kanjialive.com/api/docs
        </Text>
        <Icon name={'hand-peace'} type={'FontAwesome5'} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          goToLink('https://icons8.com/icons/set/arrow');
        }}
        style={styles.touchable}>
        <Text style={styles.text}>
          Icons8 for the cartoon style arrows. Check them out on:
          https://icons8.com/icons/set/arrow
        </Text>
        <Icon name={'hand-spock'} type={'FontAwesome5'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Credits);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    // fontFamily: 'roboto',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 70,
    color: '#0072b1',
    flex: 1,
    textAlign: 'right',
  },
  text: {
    flex: 3,
    textAlignVertical: 'center',
    fontSize: 16,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
