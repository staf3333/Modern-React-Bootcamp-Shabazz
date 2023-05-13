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
