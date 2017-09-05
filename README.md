# ReactReduxTemplate
React-redux template with logging and error reporting middleware. Integrates with Sentry.io using Raven.js, and is set up to integrate react router into the redux store. Jest is used for testing, and the project is set up to work with Travis-CI and Coveralls with minimal setup making this an excellent starting point for React-Redux project.

[![npm version](https://badge.fury.io/js/react-redux-semantic.png)](https://badge.fury.io/js/react-redux-semantic)
[![Build Status](https://travis-ci.org/Jrichlen/ReactReduxTemplate.svg?branch=master)](https://travis-ci.org/Jrichlen/ReactReduxTemplate)
[![Coverage Status](https://coveralls.io/repos/github/Jrichlen/ReactReduxTemplate/badge.svg?branch=master)](https://coveralls.io/github/Jrichlen/ReactReduxTemplate?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d6bb3bae7fc147a3933fd53223777cc9)](https://www.codacy.com/app/Jrichlen/ReactReduxTemplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Jrichlen/ReactReduxTemplate&amp;utm_campaign=Badge_Grade)

This is a work in progress. Please be patient and I will try to update this as quickly as possible. File an issue if you think I missed anything.

## Requirements

node 6+ 

## Install

Clone repository:
```sh
$ git clone https://github.com/jrichlen/ReactReduxTemplate.git <my-project-name>
$ cd <my-project-name> 
```

and run:

```npm
$ npm install
```

## Error Reporting with Raven.js and Sentry.io
Before you do anything with the app you need to set up [Sentry.io](https://sentry.io) to receive error information from raven.js. 
Set up an account on Sentry.io and follow their instructions to set up a project. At some point they will give you a 
DSN for your project. In the store directory you will need to create a javascript file called raven.config.js. This will
contain your DSN for your project. 

```npm
const RavenDSN = "YOUR_DSN_GOES_HERE"; 
export default RavenDSN;
```

This was done to protect your app from some one cloning your repository and generating a bunch of errors unrelated to your app.
The raven.config.js file is included in the gitignore file.

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project! Below are the commands 
available via package.json.

```npm
$ npm start            # Start the development server
$ npm test             # Run tests using jest
$ npm run coverage     # Run tests with coverage option
$ npm run watch        # Run tests with watch option 
$ npm run coveralls    # Manually run tests and report to coveralls (requires coveralls repo key, see below)
$ npm run build        # Builds the application to ./dist
```

## Travis CI
Setting up [Travis CI](https://travis-ci.org/) is fairly easy. Create an account on their website, and follow the directions to set up your project 
which you will need to push to github if you haven't done so already.

**Note:** If your version of Node is higher then 6 you should update the .travis.yml file by changing the node_js version. This 
tells Travis CI which version of code to run your build with.

## Coveralls.io
Create an account on [Coveralls.io](https://coveralls.io/) and add the repo on github for your project. Then create a coveralls.yml file using 
the command that corresponds to the system you are working in.

```npm
$ touch coveralls.yml        //Unix Command
$ type nul > coveralls.yml   //Windows Command
```

The coveralls.yml file should not be uploaded to github, but it is useful for manually testing that coveralls works 
before you do a commit and it runs via Travis CI. Inside the file you will need to add your repo token from the Coveralls.io website. It should look like this:

```yaml
repo_token: YOUR_REPO_TOKEN_GOES_HERE
```

You can test if Coveralls is working by running to coveralls script.

```npm
$ npm run coveralls
```

## Redux DevTools
This project is set up to work with the [Chrome Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) 
extension right out of the box.

## React Routing
Routing is set up to follow the [react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config). 
You can continue to use this format, or you can also ditch react-router-config and opt to do it with Switch components or some other way and 
it should (but I'm not guaranteeing it will) still work with redux.

**Note:** Ditching react-router-config will also break the components that were included as examples. If you're 
planning to keep these you may have to rebuild them because they are built to work with the react-router-config json format. I included
react-router-config impart to see how it works and to give others a chance to experiment with it. Feel free to ditch it if you 
feel it's not stable enough for your project, but be aware that you'll have to remove the renderRoutes components from the dashboard and home elements, 
and fix the headerMenu so it's not based on the same routing object layout used by react-router-config.

## Semantic UI React
[Semantic UI React](https://react.semantic-ui.com) is included as a dependency in this project to get you started. The CSS file is include via a link tag in ./src/index.html 
(in case you're looking to remove it and opt for a different ui library or creating a custom library). 

## More Information
I will continue adding information as I go. Post an issue if you're having trouble and we'll see what we can do.
