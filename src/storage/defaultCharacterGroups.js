import {hiraganaData, katakanaData} from './kanaData';
import {kanjiData} from './kanjiData';

export const defaultCharacterGroups = [
  {
    name: 'Hiragana',
    id: '0',
    characters: hiraganaData,
  },
  {
    name: 'Katakana',
    id: '1',
    characters: katakanaData,
  },
  {
    name: 'Kanji',
    id: '2',
    characters: kanjiData,
  },
  {
    name: 'Favorites',
    id: '3',
    characters: ['xyz'],
  },
];
