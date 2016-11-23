# Movebubble App Calendar Feature

This repo contains a recreation of the 'Book a Viewing' feature on the Movebubble app and has been created using React. A demo has been hosted using GitHub pages and can be seen [here](https://lsewilson.github.io/mb-app/). It is best viewed on a mobile device, or as a mobile device in a browser (instructions below).

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
* Render dates dynamically depending on current date
* Add ability to deselect times before submitting
* Deactivate 'Select Multiple Timeslots' button

**Styling**:
* Sort out CSS transition of calendar opening and closing
* Add styliing to highlight current date selection
* Add styling to highlight whether a particular time has been selected.

## Approach to solution

I started by templating the app with plain HTML files so that I could understand what components I needed to build the app using React. I have included the files [here](#).

From there, I proceeded to develop the 'Schedule a Viewing' button and the simpler parts of the Calendar element. As I tried to implement some kind of transition between the button component and calendar component, it became obvious that I needed an overall App parent component where both components would be child components of it. Also, I decided that the button should be a single component whose state I could update rather than showing and hiding different buttons constantly.

When creating the date elements, I found it difficult to update each of the dates according to the current date. In the end I left the dates as hard coded and added the bug to my To Do list.

It took me a long time to understand how I could create a JSON object from my date and time selections. Once I had grasped how the state of the parent component could be updated by the child component via props, I was able to store pending bookings in the App and then create a JSON object from that using that data.

When it came updating the text on the button, I had difficulty dealing with the asynchronicity of the setState() function. At first, as I didn't realise this was the issue, I struggled to get the button to update its 'text' state according to user interactions in other components. When I realised my problem, I solved it by including the functions that were dependent on the new state as a callback in the setState() function.

Once I had the core functionality fully working, I went back to working out the bugs in the app. I tried hard to stick to TDD, but struggled at points, especially as the app would work in the browser, but the test still wouldn't pass.
