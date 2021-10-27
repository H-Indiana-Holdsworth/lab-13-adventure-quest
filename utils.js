import quests from './data/quest-data.js';

export function generateUser(formData){
    // return a userObject using data from form data
    return {
        completed: {},
        honor: 50,
        monies: 500,
        name: formData.get('name'),
        race: formData.get('race')
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function findById(items, id) {
    for (let item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function scoreQuest(choiceObject, questId, userObject){
    userObject.honor += choiceObject.honor;
    userObject.monies += choiceObject.monies;    
    userObject.completed[questId] = true;
}

export function hasCompletedAllQuests(userObject){
    for (let quest of quests) {
        if (!userObject.completed[quest.id]) {
            return false;
        }
    }
    return true;
}