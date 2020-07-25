import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {color} from './../../Styles/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class CharacterGroup extends Component {
  navigationHandler = () => {
    this.props.onPress(this.props.characterListNumber);
  };
  render() {
    return (
      <View style={styles.characterGroupContainer}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={this.navigationHandler}>
          {this.props.name == 'Favorites' ? (
            <View style={styles.characterGroupTextContainer}>
              <Icon name={'star-o'} type={'FontAwesome'} style={styles.icon} />
            </View>
          ) : (
            <View style={styles.characterGroupTextContainer}>
              <Text style={styles.displayCharacter}>
                {this.props.displayCharacter}
              </Text>
            </View>
          )}

          <Text style={styles.characterGroupText}> {this.props.name} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    fontSize: wp('30%'),
    color: color.tileIcon,
    textAlignVertical: 'center',
  },
  characterGroupTextContainer: {
    flex: 7,
    justifyContent: 'center',
    // borderWidth: 1,
  },
  characterGroupText: {
    // fontSize: 24,
    fontSize: wp('6%'),
    flex: 2,
    color: color.header,
  },
  displayCharacter: {
    fontSize: wp('28%'),
    color: color.header,
    // borderWidth: 1,
    textAlignVertical: 'bottom',
  },
  characterGroupContainer: {
    flex: 1,
    padding: 6,
    elevation: 7,
    backgroundColor: color.tiles,
    borderRadius: hp('1.5%'),
    margin: 6,
  },
});
