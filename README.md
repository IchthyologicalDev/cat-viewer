# Cat Viewer
## Description
Why browse for cat images elsewhere when you can use Cat Viewer?

## Assumptions
1. Previous button should not be displayed when the user is on the first image. 
1. Next button will always be active, but will either display the stored image if present, or fetch a new image if the user is already on the last image fetched.
1. If there's an error hitting the api, the current cat will remain displayed. For future work, we would want to notify the user.
1. The UI will indicate loading to the user when waiting for an api call to complete. While waiting for a response, the user will be unable to generate a new request, but would be able to navigate to previous or next cats if they were already loaded in the app.
1. There will be a get random cat button which will fetch a new cat, and take the user to very end.
1. Clicking previous after getting a random cat will take the user to the second to last cat fetched, rather than the second to last cat viewed (otherwise the user would be unable to navigate to certain images without additional features)

## Getting Started
1. In the project directory, run `npm install`
1. `npm start`
1. The app should load on localhost:3000


## With more time
1. Shoring up UI after speaking with a designer
1. Organizing code for ease of maintenance and new feature developer
1. Expanding test coverage
