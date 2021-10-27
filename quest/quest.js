import quests from '../data/quest-data.js';
// import { findById, getUser, setUser, scoreQuest } from '../utils.js';
import { findById, getUser } from '../utils.js';

// use search params to determine which quest to display
const params = new URLSearchParams(window.location.search);
const questData = findById(quests, params.get('id'));

// update all the HTML Elements with the quest data
const title = document.getElementById('quest-title');
title.textContent = questData.title;

const img = document.getElementById('quest-image');
img.src = `../assets/quests/${questData.image}`;

const description = document('quest-description');
description.textContent = questData.description;

const questChoices = document.getElementById('quest-choices');
for (let choice of questData.choices) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    
    label.append(input, span);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'Choose';
questChoices.append(button);

questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();
    // get the selected choice from the choices array (findById)
    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    const choice = findById(questData.choices, selectedRadio.value);

    // get userdata from localStorage (getUser)
    const user = getUser();
    // update the user (scoreQuest(choice, questId, user))
        // update monies, honor, completed

        // reset to localStorage (setUser)

    // display the result
    
    // display a link to go back to map
});