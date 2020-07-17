import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon} from 'native-base';
import {color} from './../../Styles/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class SearchAndFilters extends Component {
  state = {
    isFilter: true,
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

  clearTextInput = () => {
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
                <TouchableWithoutFeedback onPress={this.props.setMeaningFilter}>
                  <View
                    style={
                      this.props.meaningFilter
                        ? styles.optionActive
                        : styles.optionUnactive
                    }>
                    <Text
                      style={
                        this.props.meaningFilter
                          ? styles.optionActiveText
                          : styles.optionUnactiveText
                      }>
                      Meaning
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.props.setReadingFilter}>
                  <View
                    style={
                      this.props.readingFilter
                        ? styles.optionActive
                        : styles.optionUnactive
                    }>
                    <Text
                      style={
                        this.props.readingFilter
                          ? styles.optionActiveText
                          : styles.optionUnactiveText
                      }>
                      Reading
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.props.setExampleFilter}>
                  <View
                    style={
                      this.props.exampleFilter
                        ? styles.optionActive
                        : styles.optionUnactive
                    }>
                    <Text
                      style={
                        this.props.exampleFilter
                          ? styles.optionActiveText
                          : styles.optionUnactiveText
                      }>
                      Examples
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          ) : null}
          {this.state.isFilter ? (
            <View style={styles.searchOptions}>
              <Text style={styles.label}>Grade:</Text>
              <View style={styles.optionContainer}>
                <TouchableWithoutFeedback onPress={this.setGradeAll}>
                  <View
                    style={
                      this.props.gradeFilter === -1
                        ? styles.optionActive
                        : styles.optionUnactive
                    }>
                    <Text
                      style={
                        this.props.gradeFilter === -1
                          ? styles.optionActiveText
                          : styles.optionUnactiveText
                      }>
                      All
                    </Text>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.setGrade1}>
                  <View
                    style={
                      this.props.gradeFilter === 1
                        ? styles.optionActive
                        : styles.optionUnactive
                    }>
                    <Text
                      style={
                        this.props.gradeFilter === 1
                          ? styles.optionActiveText
                          : styles.optionUnactiveText
                      }>
                      1
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.setGrade2}>
                  <View
                    style={
                      this.props.gradeFilter === 2
                        ? styles.optionActive
                        : styles.optionUnactive
                    }>
                    <Text
                      style={
                        this.props.gradeFilter === 2
                          ? styles.optionActiveText
                          : styles.optionUnactiveText
                      }>
                      2
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.setGrade3}>
                  <View
                    style={
                      this.props.gradeFilter === 3
                        ? styles.optionActive
                        : styles.optionUnactive
                    }>
                    <Text
                      style={
                        this.props.gradeFilter === 3
                          ? styles.optionActiveText
                          : styles.optionUnactiveText
                      }>
                      3
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.setGrade4}>
                  <View
                    style={
                      this.props.gradeFilter === 4
                        ? styles.optionActive
                        : styles.optionUnactive
                    }>
                    <Text
                      style={
                        this.props.gradeFilter === 4
                          ? styles.optionActiveText
                          : styles.optionUnactiveText
                      }>
                      4
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.setGrade5}>
                  <View
                    style={
                      this.props.gradeFilter === 5
                        ? styles.optionActive
                        : styles.optionUnactive
                    }>
                    <Text
                      style={
                        this.props.gradeFilter === 5
                          ? styles.optionActiveText
                          : styles.optionUnactiveText
                      }>
                      5
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.setGrade6}>
                  <View
                    style={
                      this.props.gradeFilter === 6
                        ? styles.optionActive
                        : styles.optionUnactive
                    }>
                    <Text
                      style={
                        this.props.gradeFilter === 6
                          ? styles.optionActiveText
                          : styles.optionUnactiveText
                      }>
                      6+
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
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
    height: wp('13%'),
    margin: 4,
    justifyContent: 'center',
  },
  searchBar: {
    paddingLeft: 10,
    paddingRight: 45,
    height: wp('13%'),
    borderWidth: 2,
    borderRadius: wp('3.5%'),
    borderColor: color.header,
    fontSize: wp('5%'),
  },
  deleteButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 5,
    fontSize: wp('6%'),
    width: wp('10'),
    textAlign: 'center',
    color: color.header,
  },
  filters: {
    fontSize: wp('9%'),
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    width: '20%',
    fontSize: wp('3.5%'),
  },
  optionContainer: {
    width: '80%',
    flexDirection: 'row',
    borderRadius: hp('2.5%'),
    overflow: 'hidden',
    backgroundColor: color.tiles,
    elevation: 4,
  },
  optionUnactive: {
    height: hp('5%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.tiles,
  },
  optionActive: {
    height: hp('5%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.header,
  },
  optionUnactiveText: {
    fontSize: hp('1.8%'),
    backgroundColor: color.tiles,
  },
  optionActiveText: {
    color: color.tileText,
    fontSize: hp('1.9%'),
  },
});
