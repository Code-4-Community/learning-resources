
# Jumpstart Week 3: React and Material-UI

Welcome to the 3rd week of the Jumpstart Program! This is the week we get into the good stuff...React! 
This word is probably one that you have heard whenever Web Development has been the topic of conversation 
and now you will get to learn about this awesome tool.

## React
Our good friend John wants to make an interactive user interface for his website but does not want to go through
the whole process of Creating an HTML layout and then applying a CSS stylesheet and finally adding in Javascript
functionality and liveliness. If only there was a simple library that can do all of this for us and more.......oh
wait there is. It is called React and it is dope.
 
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
   we can use () to wrap our component
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

As you can see we import the component `LuckNum` from the typescript file we wrote. Once the component is imported
we are able to use it in our new component. The syntax to do this is by creating a tag to indicate where we
want the imported component to be placed.

## Props
Looks like things are going well. We have successfully displayed John's profile picture, name, favorite color and
lucky number. Now John's friend Doug wants to display his luck number on his profile. John is happy to help and
gives him the `LuckyNum` component we made. However, Doug's lucky number is not the same as John's so Doug cannot
use the `LuckNum` component! John has a solution: use props.

### What are Props and why use them?
Props are a nice way of making your components reusable. Instead of hard coding all of our data and information
into our components, we can pass in props to give some malleability to our components. A great way to understand
props is to compare them to how functions work. For example, let us print a message to the console.

```
function printHi() {

    console.log("hi");

}
```

We successfully printed "hi" to the console! Now what if we wanted to print "hey" to the console. We would have
to make a new function because `printHi()` only prints "hi". We would then have to make `printHey()`.

```
function printHey() {

    console.log("hey");

}
```

We have now printed "hi" and "hey", but it is very repetitive and not efficient. If we wanted to print another
message we would have to make a new function OR we can just add a parameter to a function to print whatever we
want to the console and we would not need to make a new function each time. All we would need to do is pass in
our message as a parameter like so.

```
function printMessage(message) {

    console.log("Here is your note: " + message);

}
```

Now we can reuse the function whenever we want to print something to the console! 

### Using Props
This same logic can be applied when we use props. Let us revisit the `LuckyNum` component again.

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

Right now this component only displays John's lucky number. In order to make this component more reusable so that
Doug can use it, we must add props. We add props as a parameter of the function component.

```
import React from 'react'; 

const LuckyNum = (props) => {

    let myLuckyNumber = 7;

    return(
        <div>
            <h1>My Lucky Number is {myLuckyNumber}</h1>
        </div>
    );
}

export default LuckyNum;
```

Now that we have access to `props` we can simply display the luckyNum field of the prop object.

```
import React from 'react'; 

const LuckyNum = (props) => (

    <div>
        <h1>My Lucky Number is {props.luckNumber}</h1>
    </div>

)

export default LuckyNum;
```
Our component is now reuseable!! We now can use it on Doug's profile like so.

```
import React from 'react';
import LuckyNum from './LuckyNum';

const Profile = () => (

    <div>
        <img src="profileImage.jpg"/>
        <h1>Hi, my name is Doug! My favorite color is purple.</h1>
        <LuckyNum luckyNum={1111}/>
    </div>
);

export default Profile;
```

`props` is an object that React makes for each component. When you pass parameters into component declaration 
like we did with `LuckNum` React adds the parameter as a field of the object `props`. In order to get the field
of the object we simply access the object's field like we would any other object. 

> We can make the `Profile` component more reusable with props. Try now to add props to make `Profile` more
>generic (possible answer below). 

```
import React from 'react';
import LuckyNum from './LuckyNum';

const Profile = (props) => (

    <div>
        <img src=`${props.profileURL}`/>
        <h1>Hi, my name is {props.name}! My favorite color is {props.favoriteColor}.</h1>
        <LuckyNum luckyNum={props.luckyNum}/>
    </div>
);

export default Profile;
```

##State Management

### What is managing state?

### useState()

## Typing with Typescript

### Why use Typescript in the first place?

### How to type in React

## Material UI: a lifesaver

### What is Material UI?

### Why is it good?

### How can I use it?

## Other Learning Sources

