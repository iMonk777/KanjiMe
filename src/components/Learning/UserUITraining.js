import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import {color} from './../../Styles/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Icon} from 'native-base';

export default function UserUITraining({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.art}>
        <Image
          style={styles.slideBar}
          source={require('../../storage/SlideBar.png')}
        />
        <Icon
          name={'gesture-swipe-right'}
          type={'MaterialCommunityIcons'}
          style={styles.icon}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.messageTop}>
          We gave up navigation buttons for a better screen usage
        </Text>
        <Text style={styles.messageMid}>
          Now you can swipe right, to navigate back
        </Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.buttonText}>Got it</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == 'ios' ? getStatusBarHeight() : null,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: color.background,
  },
  art: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  slideBar: {
    height: '100%',
    resizeMode: 'stretch',
  },
  icon: {
    fontSize: hp('13%'),
    position: 'absolute',
    top: '48%',
    color: color.header,
  },
  contentContainer: {
    height: '100%',
    alignItems: 'center',
  },
  messageTop: {
    marginTop: hp('11%'),
    width: 300,
    fontSize: 30,
    color: color.header,
    fontWeight: 'bold',
  },
  messageMid: {
    marginTop: hp('11%'),
    width: 250,
    fontSize: 30,
    color: color.header,
    fontWeight: 'bold',
  },
  button: {
    width: 150,
    height: 66,
    backgroundColor: color.header,
    borderRadius: 33,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 90,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    width: '100%',
    color: color.headerIcon,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
