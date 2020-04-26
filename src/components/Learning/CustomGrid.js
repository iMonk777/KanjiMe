import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {color} from './../../Styles/Color';

export default class CustomGrid extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gridContainerHorizontal}>
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
          <View style={styles.horizontaLineNoBorder} />
          <View style={styles.horizontaLineBorder} />
        </View>
        <View style={styles.gridContainerVertical}>
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
          <View style={styles.verticalLineNoBorder} />
          <View style={styles.verticalLineBorder} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    aspectRatio: 1,
  },
  gridContainerHorizontal: {
    position: 'absolute',
    height: '50%',
    width: '100%',
    flexDirection: 'row',
  },
  horizontaLineBorder: {
    borderBottomColor: color.grid,
    borderBottomWidth: 1,
    flex: 1,
    height: '100%',
    alignSelf: 'flex-start',
  },
  horizontaLineNoBorder: {
    flex: 1,
    height: '50%',
    alignSelf: 'flex-start',
  },
  gridContainerVertical: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    flexDirection: 'column',
  },
  verticalLineBorder: {
    borderRightColor: color.grid,
    borderRightWidth: 1,
    flex: 1,
    width: '100%',
    alignSelf: 'flex-start',
  },
  verticalLineNoBorder: {
    flex: 1,
    height: '50%',
    alignSelf: 'flex-start',
  },
});
