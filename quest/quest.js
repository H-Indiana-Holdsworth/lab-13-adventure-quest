import quests from '../data/quest-data.js';
import { findById, getUser, setUser, scoreQuest } from '../utils.js';

// use search params to determine which quest to display
const selectedRadio = document.querySelector('input[type="radio"]:checked');
const choice = findById(questData.choices, selectedRadio.value);
console.log(choice);