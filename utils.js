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