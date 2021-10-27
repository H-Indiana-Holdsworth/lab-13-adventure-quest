// import quest data 
import quests from '../data/quest-data.js';

import { getUser, hasCompletedAllQuests, loadUser } from '../utils.js';
// get map-links element from html
const mapLinks = document.getElementById('map-links');

const user = getUser();
// loop through each quest
for (let quest of quests) {
    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}
function displayLink(quest){
    // generate an <a> for each with href = "/quest?id=<questId>"
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;

    // append link to map-links element
    mapLinks.appendChild(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;
    
    mapLinks.appendChild(span);
}

if (user.honor < 0 || hasCompletedAllQuests(user)) {
    window.location.replace('../endgame');
}

loadUser();