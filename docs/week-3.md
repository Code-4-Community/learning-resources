
# Jumpstart Week 3: React and Material-UI

Welcome to the 3rd week of the Jumpstart Program! This is the week we get into the good stuff...React! 
This word is probably one that you have heard whenever Web Development has been the topic of conversation 
and now you will get to learn about this awesome tool.

## React

### What is React?
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
It lets you compose complex User Interfaces from small and isolated pieces of code called “components”. 
React basically will build you a website out of pure Javascript! It combines HTML tags in the form of JSX, 
CSS files and good old JS logic to produce a masterpiece. 


### Why is React better than plain old HTML/CSS/JS combo?
Well React is just a Javascript Library which requires less knowledge and understanding of other frameworks. 
In addition, React makes it easy for developers to manipulate and work with the DOM with the help of a virtual browser. 
The virtual browser bridges the gap between the developer and the browser (the actual one). Lastly, React uses a type
of code called **declarative code**. Declarative code describes the end result, but does not act as a step-by-step 
guide of how to do it. In practice, that means declarative code is lightweight, easier to understand and change, 
and has fewer bugs. However, declarative code is not so good preventing errors which is why we use Typescript to help
prevent errors that may break our application.

### What a file looks like that incorporates React
Let us call this file LuckyNum.tsx (.tsx refers to the file being a typescript file).
```
import React from 'react'; 

const LuckyNum = () => {

    let myLuckyNumber = 7;

    return(
        <div>
            <h1>My Lucky Number is {myLuckyNumber}</h1>
        </div>
    );
}

export default LuckyNum;
```

At the top of our file we import the React library. We then start by building a functional component 
(which we will explain in just a moment) to display our lucky number to the user. Inside our component we return 
the JSX (Javascript XML) we want to be displayed inside the return statement. We then export the component for use 
in other places.


## Components

Components are the building blocks of a React application. Understanding what one is and how they are important is 
fundamental to one's comprehension of React.

### What is a Component?
A React component is like a piece of the "React App" puzzle. For a puzzle to be complete we need at least one piece. 
Similarly, each React application needs at least one component. The default component is usually one by the name of 
App.js or in our case App.tsx (we are using Typescript instead of Javascript). Let us take a look at the LuckyNum.tsx
file created above.
```
import React from 'react'; 

const LuckyNum = () => {

    let myLuckyNumber = 7;

    return(
        <div>
            <h1>My Lucky Number is {myLuckyNumber}</h1>
        </div>
    );
}

export default LuckyNum;
```
Here we see the creation of a component. The component's name is LuckyNum and displays our lucky number in a `<h1>`
tag. We know this is a component because it is returning JSX to be displayed to a user. Notice how our `<h1>` is
wrapped in a `<div>`. This is because React requires us to return a contained component. This means that there most be
a type of container that has what we want to display housed inside. In most cases using a `<div>` is the best way to 
go. However, you can use any piece of JSX as a wrapper/container.

So, we have covered that a component is just a piece of a React App. A cool thing we can do in react is that we can
use components that we have made in other components that we make.

### Using Components
Remember our LuckyNum component we made above? We are going to use this component in our Profile component below in
order to display your favorite number along with your name and favorite color.

```
import React from 'react';
import LuckyNum from './LuckyNum';

/* 
   Notice how there is no return statement. If we are only 
   returning JSX (no javascript inside of our component) 
   we can use () to wrap our component instead
*/

const Profile = () => (

    <div>
        <img src="profileImage.jpg"/>
        <h1>Hi, my name is John! My favorite color is blue.</h1>
        <LuckyNum />
    </div>
);

export default Profile;
```

## Props


## Material UI: a lifesaver

### What is Material UI?

### Why is it good?

### How can I use it?

## Other Learning Sources

