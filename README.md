# Movebubble App Calendar Feature

This repo contains a recreation of the 'Book a Viewing' feature on the Movebubble app and has been created using React. A demo has been hosted using GitHub pages and can be seen [here](https://lsewilson.github.io/movebubble-app-feature/). It is best viewed on a mobile device, or as a mobile device in a browser (instructions below).

Initial Screen:

![](http://i51.photobucket.com/albums/f366/supersonicrocket/initialscreen.png)

After clicking 'Schedule a Viewing':

![](http://i51.photobucket.com/albums/f366/supersonicrocket/beforeclick_1.png)

After clicking on a date and a time:

![](http://i51.photobucket.com/albums/f366/supersonicrocket/afterclick.png)

After submitting:

![](http://i51.photobucket.com/albums/f366/supersonicrocket/aftersend_1.png)

## Installation

### Prerequisites
  * Git
  * NPM
  * Google Chrome

### Set up

Install all dependencies listed in the package.json file:

```
$ npm install
```

## Running the app

### Running tests

Mocha, Chai and Enzyme were used for testing.
```
$ npm test
```

To run a specific test file, use the following:
```
$ mocha mocha test/.setup.js test/(insert test file here)
```

### Viewing in a browser

This app is mobile-responsive. Start by running the program.
```
$ npm start
```
This should open a new browser window for the address http://localhost:3000. If not, visit this address manually.

Open up Dev Tools on the browser. In Google Chrome, this can be done through the tool bar:

View > Developer > Developer Tools

Click 'Toggle device toolbar' in the top left corner of the window to change to a mobile view.

## To do

**Bugs**:
* Deactivate button until times selected.
* When there is more than 1 date selection, the last date added won't deselect, until an earlier addition has been removed.
* Set first date option to default.

**Styling**:
* Sort out CSS transition of calendar opening and closing.
* Add styling to highlight current date selection.
* Add styling to highlight whether a particular time has been selected or deselected.

**Other**:
* Refactor certain handleClick methods.
* Increase test coverage for App component.

## Approach to solution

I started by templating the app with plain HTML files so that I could understand what components I needed to build the app using React. I have included the files [here](https://github.com/lsewilson/movebubble-app-feature/tree/master/templates).

From there I built up the bits of the button and calendar components, added the transition in to switch between the two, built out the rest of the date boxes and times and then worked on feeding the information back into a post request.

Once I had a basic shell working and submitting booking requests, I worked out some of the bugs:

- Rendering dates dynamically: added the library 'Moment' to help with this.
- Changing the text on the button: I originally had difficulty with the asynchronicity of the setState() function. I solved this by including the functions that were dependent on the new state as a callback function.
- Selecting and unselecting times: this is still not functioning 100% correctly.
- Fixing tests: improved test coverage and sorted out broken tests.
