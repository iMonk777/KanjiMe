import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
import {color} from './../../Styles/Color';

export default class SearchAndFilters extends Component {
  state = {
    isFilter: false,
    exampleFilter: this.props.exampleFilter,
    meaningFilter: this.props.meaningFilter,
    kunyomiFilter: this.props.kunyomiFilter,
    onyomiFilter: this.props.onyomiFilter,
    gradeFilter: -1,
  };

  showFilters = () => {
    this.setState({
      isFilter: !this.state.isFilter,
    });
    console.log(this.props.searchTerm.length);
  };

  clearTextInput = () => {
    // console.warn('test');
    this.textInput.clear();
    this.props.searchHandler(-1);
  };

  setGradeAll = () => {
    this.props.setGradeFilter(-1);
  };
  setGrade1 = () => {
    this.props.setGradeFilter(1);
  };
  setGrade2 = () => {
    this.props.setGradeFilter(2);
  };
  setGrade3 = () => {
    this.props.setGradeFilter(3);
  };
  setGrade4 = () => {
    this.props.setGradeFilter(4);
  };
  setGrade5 = () => {
    this.props.setGradeFilter(5);
  };
  setGrade6 = () => {
    this.props.setGradeFilter(6);
  };

  render() {
    return (
      <View>
        <View style={styles.containerSearchAndFilter}>
          <View style={styles.containerSearchAndDelete}>
            <TextInput
              ref={input => {
                this.textInput = input;
              }}
              placeholder={'Type here to search'}
              style={styles.searchBar}
              onChangeText={term => this.props.searchHandler(term)}
            />
            {this.props.searchTerm && this.props.searchTerm.length ? (
              <Icon
                name={'x'}
                type={'Feather'}
                style={styles.deleteButton}
                onPress={this.clearTextInput}
              />
            ) : null}
          </View>

          <TouchableOpacity
            style={styles.filterButton}
            onPress={this.showFilters}>
            <Icon
              name={'md-options'}
              type={'Ionicons'}
              style={styles.filters}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          {this.state.isFilter ? (
            <View style={styles.searchOptions}>
              <Text style={styles.label}>Search by:</Text>
              <View style={styles.optionContainer}>
                <Text
                  onPress={this.props.setMeaningFilter}
                  style={
                    this.props.meaningFilter
                      ? styles.optionActive
                      : styles.optionUnactive
                  }>
                  Meaning
                </Text>

                <Text
                  onPress={this.props.setReadingFilter}
                  style={
                    this.props.readingFilter
                      ? styles.optionActive
                      : styles.optionUnactive
                  }>
                  Reading
                </Text>

                <Text
                  onPress={this.props.setExampleFilter}
                  style={
                    this.props.exampleFilter
                      ? styles.optionActive
                      : styles.optionUnactive
                  }>
                  Examples
                </Text>
              </View>
            </View>
          ) : null}
          {this.state.isFilter ? (
            <View style={styles.searchOptions}>
              <Text style={styles.label}>Grade:</Text>
              <View style={styles.optionContainer}>
                <Text
                  style={
                    this.props.gradeFilter === -1
                      ? styles.optionActive
                      : styles.optionUnactive
                  }
                  onPress={this.setGradeAll}>
                  All
                </Text>
                <Text
                  style={
                    this.props.gradeFilter === 1
                      ? styles.optionActive
                      : styles.optionUnactive
                  }
                  onPress={this.setGrade1}>
                  1
                </Text>
                <Text
                  style={
                    this.props.gradeFilter === 2
                      ? styles.optionActive
                      : styles.optionUnactive
                  }
                  onPress={this.setGrade2}>
                  2
                </Text>
                <Text
                  style={
                    this.props.gradeFilter === 3
                      ? styles.optionActive
                      : styles.optionUnactive
                  }
                  onPress={this.setGrade3}>
                  3
                </Text>
                <Text
                  style={
                    this.props.gradeFilter === 4
                      ? styles.optionActive
                      : styles.optionUnactive
                  }
                  onPress={this.setGrade4}>
                  4
                </Text>
                <Text
                  style={
                    this.props.gradeFilter === 5
                      ? styles.optionActive
                      : styles.optionUnactive
                  }
                  onPress={this.setGrade5}>
                  5
                </Text>
                <Text
                  style={
                    this.props.gradeFilter === 6
                      ? styles.optionActive
                      : styles.optionUnactive
                  }
                  onPress={this.setGrade6}>
                  6+
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSearchAndFilter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSearchAndDelete: {
    flex: 7,
    height: 46,
    margin: 4,
    justifyContent: 'center',
  },
  searchBar: {
    paddingLeft: 10,
    paddingRight: 45,
    height: 46,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: color.header,
  },
  deleteButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 5,
    fontSize: 20,
    height: 40,
    width: 40,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: color.header,
  },
  filters: {
    fontSize: 35,
    color: color.header,
  },
  filterButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  searchOptions: {
    margin: 4,
    flexDirection: 'row',
  },
  label: {
    height: 36,
    textAlignVertical: 'center',
    width: '20%',
    fontSize: 14,
  },
  optionContainer: {
    width: '80%',
    flexDirection: 'row',
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 4,
  },
  optionUnactive: {
    height: 36,
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: color.tiles,
  },
  optionActive: {
    color: color.tileText,
    height: 36,
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: color.header,
  },
});
