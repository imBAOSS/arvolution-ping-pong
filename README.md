
# Arvolution Ping Pong Scorekeeper

## Getting Setup
1. Download or clone the repo and navigate to the repo's root directory.
2. Run `npm install` to install all dependencies.
3. Run `npm run start` to start the dev server.
4. Navigate to `http://localhost:3000`.

## Implementation
The ping pong scorekeeper uses `localStorage` to keep track of score and to persist the data on reload. If the app was any more complicated, I probably would have used a state management tool like Redux, or leveraged `useContext` for more complex pieces of state. For the scope of this project, using `localStorage` was sufficient and quick to get up and running.

To reset your game session, open navigate to the "Local Storage" section in the "Applications" tab of your Developer Console. Click on `http://localhost:3000` to access your local storage and delete the local storage key `PING_PONG_GAME_SESSION`.

For Google Chrome: https://developer.chrome.com/docs/devtools/storage/localstorage/

For Firefox: https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector

## Creative Liberty
The wireframes gave a basic layout to how the scorekeeper project should have been laid out.

I did take some creative liberty with adding Arvolution's logo, and tried to emulate some of Arvolution's basic brand that I deduced from the logo.

## Improvements
If I had more time, there's a couple areas of improvements I would like to make, including the following:

1. Refactor the frontend component architecture to be more repeatable. An example would be the `button` components that have the same style. A shared `<Button />` that is reusable would be my first move.
2. Autosave on "Add win" button clicks.
3. Adding a modal that pops up when you land on the root directory and prompts you to continue a session if there's an existing session stored in local storage.
4. More comprehensive tests.