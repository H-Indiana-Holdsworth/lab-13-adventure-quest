import quests from '../data/quest-data.js';
import { findById, getUser, scoreQuest, setUser } from '../utils.js';

// use search params to determine which quest to display
const params = new URLSearchParams(window.location.search);
const questData = findById(quests, params.get('id'));
console.log(questData);

// update all the HTML Elements with the quest data
const title = document.getElementById('quest-title');
title.textContent = questData.title;

const img = document.getElementById('quest-image');
img.src = `../assets/${questData.image}`;

const description = document.getElementById('quest-description');
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
    scoreQuest(choice, questData.id, user);

        // reset to localStorage (setUser)
    setUser(user);
    // display the result
    const questDetails = document.getElementById('quest-details');
    questDetails.classList.add('hidden');
    
    const questResults = document.getElementById('results');

    const resultP = document.createElement('p');
    resultP.textContent = choice.result;

    // display a link to go back to map
    const backLink = document.createElement('a');
    backLink.href = '../map';
    backLink.textContent = 'Return to Map';

    questResults.append(resultP, backLink);

    questResults.classList.remove('hidden');

});