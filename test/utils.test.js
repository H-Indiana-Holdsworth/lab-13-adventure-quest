// IMPORT MODULES under test here:
import { generateUser } from '../utils.js';

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
