import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {color} from '../../Styles/Color';
import {Icon} from 'native-base';

export default class CrayonButton extends Component {
  changecolor = () => {
    this.props.onPress(this.props.color);
  };
  render() {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          margin: 4,
          minHeight: 60,
          borderRadius: 16,
          backgroundColor: color.tiles,
          paddingTop: 8,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 2,
        }}
        onPress={this.changecolor}>
        <Icon
          name={'pencil'}
          type={'FontAwesome'}
          style={{
            alignSelf: 'center',
            fontSize: 40,
            color: this.props.color,
            transform: [{rotateZ: '135deg'}],
          }}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  practiceButton: {
    flex: 1,
    margin: 4,
    minHeight: 60,
    borderRadius: 16,
    backgroundColor: color.tiles,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
});
