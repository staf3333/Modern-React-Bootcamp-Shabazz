# Learning React With Colt Steele

After taking my first [course with Colt Steele](https://www.udemy.com/course/the-web-developer-bootcamp/) on web development, I'm starting to feel pretty comfortable with HTML/CSS/Javascript as well as using Mongo (admittedly need to brush up on that), Node.js, and Express to build a full stack app (maybe I should ad a link to the YelpCamp project here). So, if I were to build a site using just those... that'd be a MEN stack? Something about that just doesn't seem right :pause_button:. I think what's more common is a MERN stack and I'm missing the R for React!

To complete the loop I'll be taking [another Colt Steele Course](https://www.udemy.com/course/modern-react-bootcamp/) on React! This will be my first time learning a framework and I've heard React is a good place to start. Per the description, this course will use a variety of exercises, projects, and games to teach me how to use the React framework to build and maintain modular JavaScript code with ease!

Here are some highlights (taken from the course description):

* Learn React, from the very basics up to advanced topics like Next JS, React Router, Higher Order Components and Hooks and the Context API.

* Build one massive capstone application, complete with drag & drop, animations, route transitions, complex form validations, and more.

* Learn the latest in React, including Hooks (my favorite part of React!).  We build a complete app using Hooks, including multiple custom hooks.

* Learn state management using the useContext and useReducer hooks, to mimic some of the functionality of Redux.

## Intro

What will I be using this readme file for?

After each section I plan to summarize what I've learned, explain what exercises I did, and keep track of any notes or questions that may come up along the way

I think this will greatly help my memory retention, as well as serve as a reference which I can always come back to. I also expect it to make it easier to explain what I've learned to others in the future (job interview? :wink:)

## Section 1: A Taste of React

### Intro to React

I start off by learning... what is React? It is a powerful **front-end framework/library** that makes it easy to use and reuse "view components" and makes it easier to build modular applications! In react, we "encapsulate" logic and HTML into a *class* that can be shared across documents.

### Framework or Library?

Apparently there are some discussion around if React is a framework or a library, but before we get into that let's first talk about what a **front-end framework** even is.

Key characteristics:

* Larger JS Libraries
* Provide "blueprint" for apps
* "Opinionated", meaning they have guidelines for how you should design an app
* they often provide for code re-use
* They also often provide templating for HTML

What are some popular frameworks rn? Angular, Ember, Vue, **React**, **Next.js**

Now, let's get back to the question of "is React a framework or library?" Colt's opinion is that React *by itself* is a library, however people rarely use it on it's own. React is usually combined with things like React Router, Webpack, etc. making the "React Ecosystem" a framework in it's own right. Side note: Next.js is actually a framework built around React!

### Components

#### Basics

**React Components** allow you to split UI into independent, reusable pieces, and think about each piece in isolation. They are basically the "building blocks of react."

Key characteristics:

* Contain pieces of UI & view (JS) logic

* Classes that know how to render themselves into HTML (however not all components are class based, there are function based components as well which we will get into later in the course)

At the end of this video, we went over an [example](https://codesandbox.io/s/62x458v5pn) of a Rating component that consisted of multiple Star components.

#### Our First Component

We can write components using both Classes and Functions

Notes to preface:

* You need to include a `<script>` tag to enable React

    ```` HTML
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    ````

* Also need another script tag to include [**React DOM**](https://www.geeksforgeeks.org/reactjs-reactdom/#)

    ```` HTML
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    ````

* Need a script tag for [**Babel**](https://babeljs.io/docs/), a JavaScript compiler that allows you to use **JSX** to write HTML tags directly in JS

    ```` HTML
    <script src="https://unpkg.com/babel-standalone"></script>
    ````

* Need a script tag to the actual file where you type you component!

    ```` HTML
    <script src="index.js" type="text/jsx"></script>
    ````

  * `type = "text/jsx"` is important because it tells the browser that the file might contain JSX syntax

#### Function Vs. Class Based Components

##### Class Components

Class components are the "traditional" form of React Components. They allow you to write logic in a JS class and they require you to include a `render()` method

Example:

````javascript
class Dog extends React.Component {
    render() {
        return <p>Hi everyone!</p>
    }
}
````

##### Function Components

Function components are historically used for simpler, "dumb," components that don't require too much logic & aren't changing a lot. They allow you to write logic in a JS function and they don't require you to include a `render()` method, just return content

Example:

````javascript
function Dog() {
    return <p>Hi everyone!</p>
}
````

##### What's the Difference?

While both class based and function based components can accept props and render content, historically, function components couldn't use important features like **state** or **life cycle methods**. However, with the introduction of [**Hooks**](https://legacy.reactjs.org/docs/hooks-intro.html), we can now write full-featured function components.

For this course, we'll begin working with class components for the most part (so we only have to worry about one syntax), then we'll pivot once we start learning about Hooks

#### Standard React App Layout

Instead of having our *component* in the index.js file... we'll often have more than one component so we'll want to keep them in separate files!

> Convention: 1 Component per file, w/ component name as file name

It's also conventional for the top-level component to be named **App**. The app component renders the other components and is good to include because readers of the code will know where to start. The app component is usually the only thing rendered in index.js

## Section 9: React State Exercises

In this section, I solidified the concept of using state in react by creating two different mini-apps: Coin Flipper and Color Boxes

### Coin Flipper

Objective:

>For this part, create a coin flipping counter.
The user should be able to click on a button to flip a coin. Every time the user clicks, the coin gets flipped again. The app should also keep track of how many times heads and tails have shown up.
Before building anything, think about the structure of your React app. Don’t build this application with a single component: think about how to break your app up into at least two separate components!

I should expect my final output to look something like this:
![Coin Flipper Demo](/extras/images/coin.gif)

I created two components: Coin, a component whose sole job is to render the correct face of the coin and Flipper, the main component which kept track of the state of the coin flip

What should be kept track of in state? Well, what's changing? The current side the coin is on/should display and hom many times heads and tail show up
(`numHeads`, `numTails`, `isTails`)

Once I figured out the structuring of everything, making the components themselves was pretty simple

### Color Boxes

## Section 10: The World Of React Events

### Goals of this section

* Learn how to attach event handlers to components in React

* Learn how to use method binding to preserve the ***this*** context within event handlers

* Learn how to pass event handlers down as props to child components

* Understand the **key** prop that React asks for when mapping data

### Commonly used React Events

#### React Events Review

In React, we can attach event handlers to HTML elements via special reserved attributes. Any event you can listen for in JS, you can listen for in React. Including mouse over events, keyboard events (onKeyUp, on KeyDown etc)

In order to practice/refresh this we created three different components:

1. WiseSquare: practiced **onMouseEnter** event by creating a component that dispensed a wisdom quote whenever you moused over containing div

2. AnnoyingForm: practiced **onKeyUp** by creating a component that sent alerts if you type in the text box. Also, we used the event data itself to give different alerts depending on which key was pressed...

    ```javascript
    handleKeyUp(e) {
        if (e.keyCode === 56) {
            alert('************** I LOVE THE * CHARACTER ************')
        } else {
            alert('BOO!')
        }
    }
    ```

3. CopyDemo: practiced **onCopy** event by creating a component that alerts when you tried to copy the text.
    * interesting thing to note was that the copy event wasn't the act of clicking CTRL + C, it was simply highlighting the text

### The Joys of Method Binding

#### keyword ***this***

You always have to be careful when you reference the keyword ***this*** in event handlers!

Why? Because you lose the ***this*** context when you pass a function as an event handler. To demonstrate this, we moved the quotes from the WiseSquare component we made into defaultProps and didn't change the way the function was defined. When we ran, we got an error because ***this*** was undefined in that context

#### fixing our binding

There are three ways to fix the issue that we were getting (***this*** not being defined in that context):

1. Use **bind** inline:

    ```javascript
    <div className = "WiseSquare"
         onMouseEnter={this.dispenseWisdom.bind(this)}>
         //logic
    </div>
    ```

    * Pros
        * Very explicit
    * Cons
        * What if we needed to pass to multiple components? We would have to bind every time!
        * By doing it this way, we are creating a new function on every render!
            * this could affect performance!
2. Use **arrow** function:

    ```javascript
    <div className = "WiseSquare"
         onMouseEnter={() => this.dispenseWisdom()}>
         //logic
    </div>
    ```

    * Pros
        * No mention of bind!
    * Cons
        * Intent is less clear (can't really tell that we're binding)
        * Again, we are creating a new function on every render!
3. Method bind in the constructor:

    ```javascript
    class WiseSquare extends Component {
        constructor(props) {
            super(props);
            this.dispenseWisdom = this.dispenseWisdom.bind(this)
        }
    }
    ```

    * Pros
        * Only have to bind once!
        * Better for performance
    * Cons
        * Uglier to write (you'll be fine)

### Alternative Binding With Class Properties

There is another way to bind keyword ***this***, but it is [experimental](https://tc39.es/process-document/) meaning that it isn't quite fully integrated into JS/React. However, since we are using Babel & CRA, we can use it and let CRA convert it! (Wouldn't work if you didn't use CRA/Babel)

```javascript
handleClick = () => {    //equals sign and arrow fcn ensures 'this is bound within handleClick
    console.log('this is', this);
}
```

### Binding With Arguments

In WiseSquare example, `dispenseWisdom()` didn't take any arguments... BUT, what if we needed to pass arguments to an event handler? Let's illustrate this with an example

#### Example: ButtonList

For this example we were given an app that had 4 buttons contained in the ButtonList component. We wanted to make it so that the background color of the div containing buttons would change to the background color of whatever button you press.

First we created a method for changing the color in state:

```javascript
changeColor(newColor) {
    this.setState({ color: newColor })
}
```

However if you just try to call `this.changeColor(c)` in `onClick` event, you'll run into errors b/c it will immediately be invoked (`this.changeColor` vs `this.changeColor()`). In order to fix this (no pun intended), we need to bind the value of ***this***!

First way to do it would be ===> `onClick = {this.changeColor.bind(this, c)}`. But, as we've learned, this is not the best way to do it!

### Passing Methods to Child Components

Passing methods to child components is a very common pattern in React! The idea behind it is that children are often **not stateful**, but need to tell parents to change state! (this is the problem I was running into with the color boxes exercise, I couldn't figure out how to get a single box component to change the state of the larger container)

#### How data flows

1. A parent component defines a function
2. The function is passed as a property to a child component
3. The child component invokes the property
4. The parent function is called, usually setting new state
5. Parent component is re-rendered, along with it's children

#### Example: making a better NumberList

In order to understand the data flow, we created a NumberList component that has state with an array of numbers & displays a button that allows you to remove the corresponding item onClick.

In order for button component to work, we needed to pass a `remove` function from NumberList component down to Item component so onClick of a button, the remove function will be called on that item

```javascript
class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
  }

  remove(num) {
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }

  render() {
    let nums = this.state.nums.map(n => (
      <NumberItem value={n} />
    ));
    return (
      <div>
        <h1>First Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}
```

There are two ways to pass remove function down

1. pass `remove` function in as a prop:

    ```javascript
    let nums = this.state.map(n => <NumberItem value={n} remove={() => this.remove(n)} />)
    ```

    * note that we're using the arrow function notation = making a bunch of new functions by setting inline in render
2. Do it without binding inside of render --> bind once in the constructor:

    In constructor we'll have:

    ```javascript
    constructor(props) {
        super(props);
        this.state = { nums: [1, 2, 3, 4, 5] };
        this.remove = this.remove.bind(this)
    }
    ```

    Then in render we'll have:

    ```javascript
    let nums = this.state.nums.map(n => <NumberItem value={n} remove={this.remove}>)
    ```

Problem with option 2 as is is that we're not passing in the argument so that when we go to call method on child component... `<button onClick={this.props.remove}>X</button`, we'll get weird behavior because the default behavior is to pass in the event object itself!

To fix this issue, instead of passing in this.props.remove directly, we add an extra layer in between:

First, add a method in NumberItem component, `handleRemove`

```javascript
handleRemove(evt) {
    this.props.remove(this.props.value)
  }
```

Then, change the render of the button to use `handleRemove` instead of `remove`

```javascript
<button onClick={this.handleRemove}>X</button>
```

Lastly, bind `handleRemove` in constructor:

```javascript
constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this)
  }
```

Final result:

```javascript

class BetterNumberItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleRemove(evt) {
    this.props.remove(this.props.value)
  }
  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}
```

#### Where to bind?

Here are Colt's guidelines on where to bind methods:

* The higher, the better - don't bind in child component if not needed
* If you need a parameter, pass it down to the child as a property, then bind in parent and child component
* Avoid inline arrow functions/binding if possible
* No need to bind constructor and make an inline function (redundant)
* If stuck, don't worry about performance, just try to get components talking to each other --> refactor later

### Parent-Child Method Naming

You can call event handlers whatever you want... React could care less. However, for consistency and readability, Colt recommends following the **action/handleAction** pattern (i.e. remove/handleRemove)

### Quick Detour: React Keys

Up until now, anytime we've been mapping over data and returning a list of components, we get a message warning about keys for list items: ![Key Error](/extras/images/keyError.png)

***key*** is a special string attribute to include when creating lists of events. Keys help React identify which items have been changed, are added, or are removed

#### Adding keys

To assign a key, add it as a property to whatever component you're mapping out:

```javascript
///whatever comes before this
nums.map(n => (
    <NumberItem 
        value={n}
        key={n} //in this example we set key to be num itself
        remove={this.remove}    
    />
))
```

Note: the way we set key to be num itself only work is **if the data (numbers in this case) is unique**

> In our example, if we have duplicate numbers, then removing one value will remove all it's duplicates

We want to ALWAYS have unique keys!

#### Picking keys

* The best way to pick keys is to use a string that uniquely identifies item among siblings!
* Most often you would use IDs from your data as keys
* As a **last resort**, you may use the iteration index as a key (if you don't have stable IDs)
  * Not a very good idea!
  * Don't use indexes for keys if item order may change or items can be deleted!
    * Can cause performance issues or bugs with component state
* There does exist libraries that help you make unique keys

## Section 11: Hangman Exercise

### Intro to Hangman

These next two sections were dedicated to solidifying our knowledge of everything we learned so far (Props, State, Handling Events, Passing state of parent --as well as functions which change state of parent component-- as props to children components) by creating two different games: Hangman and Lights Out

For the Hangman exercise, we were given a fair amount of starter code and we had to do these things:

1. Add a key to the buttons
2. Keep track of the number of wrong guesses
3. End game on a loss
    * In starter code, game allowed you to keep pressing buttons even after the game is over
    * Want to change it so it no longer shows buttons & and shows message "you win" and reveal the correct word
4. Add alt text to hangman image for accessibility
5. Use a random word to be the answer
6. Add a restart Button

### Adding a key

This part was pretty simple, since there are no duplicates in the alphabet (which we mapped over an array of to create the butttons) we could just set the key to be the letter itself

```javascript
<button
        value={ltr}
        key={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
```

### Tracking incorrect guesses

Simple, just added a p tag in the render that displayed the `nWrong` from the state  

```javascript
<p className='Hangman-btns'>{this.generateButtons()}</p>
```

### Ending game on a loss

Used conditionals outside of return (for Hangman render method) because there were multiple conditions I had to worry about (if you ran out of guesses and lost, or if you won) and I didn't want to have to deal with ternary operator

```javascript
let content;
  if (this.state.nWrong === this.props.maxWrong) {
    content = <div>
      <p>You Lose! You are absolutely atrocious at this game!</p>
      <p>Here is the correct answer, bum: {this.state.answer}</p>
    </div>
  } else {
    content = <div>
      <p className='Hangman-btns'>{this.generateButtons()}</p>
    </div>
  }
```

> here, we create a content variable, that we can easily pass into the return and it will adapt based on the conditionals

### Adding alt text

Simple again, just add alt attribute and set it to be equal to `nWrong/maxWrong`

```javascript
 const altText = `${this.state.nWrong}/${this.props.maxWrong}`
 /// then in render
 <img src={this.props.images[this.state.nWrong]} alt={altText} />
```

> TIP: So in this, I created a

### Set answer to be a random word

All I had to do was import random word function from the words.js file, then set `answer: {randomWord()}` when initializing state

### Adding restart button

Created new function to reset the state on button click

```javascript
resetGame() {
  this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() })
}
```

### Conclusion

Overall, this exercise was pretty fun! Definitely came with a lot of the logic already built in but it was good to practice using state, props, and events

## Section 12: Lights Out Game

This is the second exercise to practice what I learned with state, props, and event handlers! For this exercise, we were also given some starter code, but I had to build out a lot of the logic on my own... it was a bit more advanced but I got through it!

### Introducing Lights Out

Objective: Make a game on a grid of lights were toggling one light toggles it's neighbors. The goal of the game is to turn all the lights off.

Instead of telling us how to structure the components right off the back, Colt asked us to take a second to think ab how we would structure the components...

* App components- responsible for rendering the GameBoard component; could pass in props to like how large you want the game board to be, but it definitely should not have a state
* GameBoard - renders board grid
  * props?
    * A  2D array? This is what I said at first but instead of create 2 seperate 2D arrays for both props and state, I can just use one 2D to keep track of is a light on or not and render Lights based of that
  * state?
    * What's changing - the state of each light, whether the game is won or not
* Light - renders a single light div, where state of that light (from GameBoard components) is passed in as a prop to this child component.
* Also need a way to toggle lights on and off --> function passed down to Light from GameBoard

^^^ The above is what I came up with on my own and I was pretty spot on! I ended up using different component names to match the starter code: App (same), GameBoard => Board, Light => Cell

### Displaying the game board

First task was to figure out how to actually display the game board. Like I figured when planning the component structure, I knew I was going to use a 2D array to keep track of the state of the lights on board (isLit or not).

Before doing this, I needed to actually initialize the state (& props) of the Board component.

My first inclination was to create an empty 2D array, and then fill it with the true/false values by looping over. I found this stack overflow explanation of how to create an empty 2D array

Lets say for a 5x5 board:

```javascript
board: new Array(5).fill().map(_ => new Array(5).fill(false))
```

> Which is apparently different than `Array(5).fill(new Array(5).fill(false))`. This one apparently adds a reference to the array that was passed into the fill method... meaning... all the rows are filled w/ references to ONE array. if you update `arr[0][0]` the value of `arr[1][0]` will be changed to! Arrow function is important!

This would initiate a 5x5 array where every value is initialized with false. However, with this there is a clear issue: **it won't allow me to use chances that the light will start on prop, `chanceLightStartsOn`, if I build it this way.**

Then it made sense why there was a `createBoard` helper method-- I needed to build it from scratch using for loops!

```javascript
 static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  }

  constructor(props) {
    super(props);
    let { nrows, ncols } = this.props

    // set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
```

Creating the `createBoard` method was simple after I thought of the logic. You start by initializing an empty array, and then loop through a nested for loop to push each row onto the board:

```javascript
 createBoard() {
    let board = [];
    let { nrows, ncols, chanceLightStartsOn } = this.props;
    // create array-of-arrays of true/false values
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        row.push(Math.random() < chanceLightStartsOn);
      }
      board.push(row);
    }
    return board
  }
```

Then I used .map to render the board:

```javascript
return (
      <table className="Board">
        <tbody>
          {this.state.board.map((row, y) => (
            <tr key={y}>
              {row.map((cell, x) => (
                < Cell isLit={cell} key={`${y}-${x}`} flipCellsAroundMe={this.flipCellsAround} coord={`${y}-${x}`} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
```

> in order to get iteration index of .map fcn, add second input to the arrow function: `.map((item, index) => xyz)`

### Flipping Cells

Was pretty simple, for a given cell, if it's clicked, flip the value in the board array (which you can easily do if you have the x,y coord of where the clicked cell is---> **can get from the key**)

Had to make sure to pass the flipCells fcn to the individual cell components (as well as the coordinates) to actually call the function with the event listeners

### Winning the Game

In order to check if the user has won the game, we have to check the board after every click to see if all the lights are off.

One way to do this is by using nested for loops, another way is by using the .every method on the board:

```javascript
let hasWon = board.every(row => row.every(cell => !cell));
```

> The every() method executes a function for each array element. The every() method returns true if the function returns true for all elements. The every() method returns false if the function returns false for one element. The every() method does not execute the function for empty elements.

I skipped the styling for this exercise honestly

## Section 13: Forms in React
