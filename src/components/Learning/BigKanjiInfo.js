import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {color} from '../../Styles/Color';

export default class BigKanjiInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infoLabelContainer}>
          <Text style={styles.infoLabelText}>{this.props.type}</Text>
        </View>
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
    marginBottom: 7,
    minHeight: 60,
    borderRadius: 16,
    backgroundColor: color.tiles,
    padding: 8,
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
    width: '85%',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 20,
  },
});
