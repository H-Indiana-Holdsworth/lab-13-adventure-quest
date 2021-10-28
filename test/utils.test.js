// IMPORT MODULES under test here:
// import quests from '../data/quest-data.js';
import { generateUser, getUser, hasCompletedAllQuests, scoreQuest, setUser } from '../utils.js';

const test = QUnit.test;

test('generateUser should return a userObject', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        completed: {},
        honor: 50,
        monies: 500,
        name:'indy',
        race: 'ewok'
    };

    const formData = new FormData();
    formData.set('name', 'indy');
    formData.set('race', 'ewok');
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('setUser should save user to localStorage', (expect)=>{
    // arrange
    localStorage.removeItem('USER');
    const userObject = {
        completed: {},
        honor: 50,
        monies: 500,
        name:'indy',
        race: 'ewok'
    };
    // act
    setUser(userObject);
    const actual = JSON.parse(localStorage.getItem('USER'));
    // expect
    expect.deepEqual(actual, userObject);
});

test('getUser should return user from localStorage', (expect)=>{
    // arrange
    const expected = {
        completed: {},
        honor: 50,
        monies: 500,
        name:'indy',
        race: 'ewok'
    };
    setUser(expected);
    // act
    const actual = getUser();
    // expect
    expect.deepEqual(actual, expected);
});

test('scoreQuest should update monies, honor, and completed on the userObject', (expect)=>{
    // arrange
    const userObject = {
        completed: {},
        honor: 50,
        monies: 500,
        name:'indy',
        race: 'ewok'
    };

    const choiceObject = {
        id: 'accept',
        description: 'Graciously accept his offer',
        result: `
        You accept the death stix and buy some. You try them, and die. Why do you think they're called death stix?
        `,
        honor: 0,
        monies: -1000,
    };

    const questId = 'bar';
    // act 
    scoreQuest(choiceObject, questId, userObject);

    // expect
    expect.equal(userObject.honor, 50);
    expect.equal(userObject.monies, -500);
    expect.equal(userObject.completed[questId], true);
});

test('hasCompletedAllQuests returns true if user has completed all quests', (expect)=>{
    // arrange
    const userObject = {
        completed: { bar: true, pirates: true, Jabba: true }
    };
    // act
    const actual = hasCompletedAllQuests(userObject);
    // expect
    expect.equal(actual, true);
});

test('hasCompletedAllQuests returns false if user has not completed all quests', (expect)=>{
    const userObject = {
        completed: { bar: true, pirates: true }
    };

    const actual = hasCompletedAllQuests(userObject);

    expect.equal(actual, false);
});
