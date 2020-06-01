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
      <View style={styles.container}>
        <View style={styles.containerSearchAndFilter}>
          <View style={styles.containerSearchAndDelete}>
            <TextInput
              placeholder={'Type here to search'}
              style={styles.searchBar}
              defaultValue={''}
              onChangeText={term => this.props.searchHandler(term)}
            />
            {this.props.searchTerm != -1 || this.props.searchTerm == '' ? (
              <Icon
                // hitSlop={{top: 8, left: 8, right: 8, bottom: 8}}
                name={'x'}
                type={'Feather'}
                style={styles.deleteButton}
                onPress={this.showFilters}
              />
            ) : null}
          </View>

          <TouchableOpacity
            style={styles.filterButton}
            onPress={this.showFilters}>
            <Icon
              // hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}
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
  container: {
    // justifyContent: 10,
  },
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
    // flex: 7,
    height: 46,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: color.header,
  },
  deleteButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 15,
    fontSize: 20,
    // borderWidth: 1,
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
    // borderWidth: 1,
    margin: 4,
    flexDirection: 'row',
  },
  label: {
    // borderWidth: 1,
    height: 36,
    textAlignVertical: 'center',
    width: '20%',
    fontSize: 14,
  },
  optionContainer: {
    // flex: 4,
    width: '80%',
    flexDirection: 'row',
    borderRadius: 18,
    // borderWidth: 2,
    // borderColor: color.header,
    overflow: 'hidden',
    elevation: 4,
  },
  optionUnactive: {
    // borderWidth: 1,
    height: 36,
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: color.tiles,
  },
  optionActive: {
    // borderWidth: 1,
    color: color.tileText,
    height: 36,
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: color.header,
  },
});
