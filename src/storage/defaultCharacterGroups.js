import {hiraganaData, katakanaData} from './kanaData';
import {kanjiData} from './kanjiData';

const characterNameList = rawData => {
  let charList = [];
  for (let i = 0; i < rawData.length; i++) {
    charList.push(rawData[i].name);
  }
  return charList;
};

export const defaultCharacterGroups = [
  {
    name: 'Hiragana',
    id: '0',
    characters: characterNameList(hiraganaData),
  },
  {
    name: 'Katakana',
    id: '1',
    characters: characterNameList(katakanaData),
  },
  {
    name: 'Kanji',
    id: '2',
    characters: characterNameList(kanjiData),
  },
  {
    name: 'Favorites',
    id: '3',
    characters: ['xyz'],
  },
];
