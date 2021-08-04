# Ally.io Assignment


## Assumptions

1. The OKR tree is assumed to have depth of 1, that means children cannot have further children. A cursory glance at the data set validated this assumption
2. OKRs with a non empty but invalid parent id (Where a parent of that id was not found), are treated like they have no parent


## Deviations from Recommendations

1. **Redux is not used.** The data itself is not complicated and has no modificaitons happening on it once downloaded and processed, hence even though redux was recommended, I felt it would be an anti-pattern to use it here.


## Setup
1. Run `yarn`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
