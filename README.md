# MERN-Stack Infrastructure

Clone this repo to provide the starter code for a comprehensive MERN-Stack project including token-based authentication.

# Here’s the process to create a new MERN-Stack project that starts with the infrastructure code:

01. Clone the mern-infrastructure repo: `git clone <url of mern-infrastructure> <name-of-project>`

02. `cd <name-of-project>`

03. Install the Node modules: `npm i`

04. Create a .env (touch .env) and add entries for DATABASE_URL and SECRET

05. Update the "name": "mern-infrastructure" in package.json to the name of your project.

06. Create a new repo on your personal GH account.

07. Copy the new GH repo’s URL.

08. Update the remote’s URL:
 `git remote set-url origin <paste the copied GH url>`

09. Make the initial commit:
 `git add -A && git commit -m "Initial commit"`

10. Push for the first time:
 `git push -u origin main`

11. Remember that the Express server won’t start without error until the build folder used by Express is created by running:
 `npm run build`

12. Start Express server: 
  `npx nodemon server.js`

13. Start React server: 
  `npm run start`

14. Have fun coding your new project and don’t forget to make frequent commits!

# Getting Started with Create React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
