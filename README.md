# Adventure Quest Plan

## Home page 
* HTML Elements
    - [x] Text input for user name 
    - [x] Radio buttons for user race
    - [x] Form Submit button
* Events
    * Form Submit
        - [x] Generate a user object using form data (generateUser)
        - [x] Store data in localStorage
        - [x] Redirect to Home page

## Map Page
* HTML Elements
* List of links
    - [x] Only clickable if user hasn't completed quest
    - [x] Link should contain a URL search parameter containing the quest ID
* Events 
    - [ ] Page Load
        - [ ] hasCompletedAllQuests checks if quests.completed = true
        - [ ] If honor <= 0, redirect to endgame page
        - [ ] If all quests completed, redirect to endgame page

## Quest Detail Page
* HTML Elements 
     - [x] Title
     - [x] Description
     - [x] Image
     - [x] Choices (radio buttons)
* Events
    * Page load 
        - [x] Get quest ID from the URL Search Parameters and load the quest data onto the page

    * Form submit
        - [x] Update user object
        - [x] Redirect to map page

## Endgame page
* HTML Elements
    * User Object
    * Present
        - [ ] Text and messages
        - [ ] Images
    * Link to play again