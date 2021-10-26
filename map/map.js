// import quest data 
import quests from '../data/quest-data.js';

// get map-links element from html
const mapLinks = document.getElementById('map-links');

// loop through each quest
for (let quest of quests) {
    // generate an <a> for each with href = "/quest?id=<questId>"
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;

    // append link to map-links element
    mapLinks.append(a);
}