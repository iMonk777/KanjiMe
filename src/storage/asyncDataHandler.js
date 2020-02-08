import {defaultCharacterGroups} from './defaultCharacterGroups';
import AsyncStorage from '@react-native-community/async-storage';

export const storeData = () => {
  for (let i = 0; i < defaultCharacterGroups.length; i++) {
    let characterGroupData = defaultCharacterGroups[i].characters;
    let characterGroupName = defaultCharacterGroups[i].name;
    AsyncStorage.setItem(
      characterGroupName,
      JSON.stringify(characterGroupData),
    );
    console.warn('Data stored succesfully');
  }
  AsyncStorage.setItem('dataIsStored', 'true');
};

export const initData = async () => {
  let dataFlag = await getData('dataIsStored');
  if (dataFlag !== true) {
    storeData();
  }
};

export const getData = async group => {
  try {
    let fetchedGroupData = await AsyncStorage.getItem(group);
    let parsedGroupData = JSON.parse(fetchedGroupData);
    // console.log(parsedGroupData);
    return parsedGroupData;
  } catch (error) {
    console.warn(error);
  }
};

export const getAllGroups = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    keys.splice(keys.indexOf('dataIsStored'), 1);

    for (let i = 0; i < keys.length; i++) {
      getData(keys[i]);
    }
  } catch (error) {
    console.warn(error);
  }
};

// let testfunction = async () => {
//   let testvar = await getData('Hiragana');
//   console.log(testvar);
// };
