import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SketchDraw from 'react-native-sketch-draw';
import {color} from '../../Styles/Color';
import CanvasButton from '../Learning/CanvasButton';
import CrayonButton from '../Learning/CrayonButton';

export default class DrawingCanvas extends Component {
  state = {
    color: color.header,
    isPreview: true,
    isColorList: false,
  };

  showColors = () => {
    this.setState({
      isColorList: !this.state.isColorList,
    });
  };
  changeColor = newColor => {
    this.setState({
      isColorList: !this.state.isColorList,
      color: newColor,
    });
  };

  togglePreview = () => {
    this.setState({
      isPreview: !this.state.isPreview,
    });
  };

  clearCanvas = () => {
    this.refs.sketchRef.clearSketch();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          {this.state.isPreview ? (
            <View style={styles.textAncCanvasContainer} pointerEvents={'none'}>
              <Text style={styles.PreviewText}>{this.props.kanji}</Text>
            </View>
          ) : null}

          <SketchDraw
            style={styles.canvas}
            ref="sketchRef"
            selectedTool={0}
            toolColor={this.state.color} //Yelow Example! you can changIT!
          />
        </View>

        {this.state.isColorList ? (
          <View
            style={{
              flexDirection: 'row',
              // borderWidth: 1,
              marginBottom: 8,
            }}>
            {color.crayons.map(prop => {
              return (
                <CrayonButton
                  onPress={this.changeColor}
                  color={prop}
                  key={prop}
                />
              );
            })}
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              // borderWidth: 1,
              marginBottom: 8,
            }}>
            {this.state.isPreview ? (
              <CanvasButton
                onPress={this.togglePreview}
                text={'Preview'}
                size={1}
                iconName={'eye-closed'}
                iconType={'Octicons'}
              />
            ) : (
              <CanvasButton
                onPress={this.togglePreview}
                text={'Preview'}
                size={1}
                iconName={'eye'}
                iconType={'Octicons'}
              />
            )}

            <CanvasButton
              onPress={this.showColors}
              text={'Color'}
              size={1}
              iconName={'format-color-fill'}
              iconType={'MaterialIcons'}
            />
            <CanvasButton
              onPress={() => {
                this.refs.sketchRef.clearSketch();
              }}
              text={'Delete'}
              size={2}
              iconName={'md-trash'}
              iconType={'Ionicons'}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textAncCanvasContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 1,
    justifyContent: 'center',
  },
  PreviewText: {
    fontSize: 300,
    textAlign: 'center',
    color: 'black',
  },
  canvas: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
});
