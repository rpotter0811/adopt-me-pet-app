import React from 'react';
import { createRoot } from 'react-dom';

// (8): Make a Pet component. All we've done here is make our "factory" for a Pet component to be used.
// (9): We want to pass data from our App component to our Pet component. So to do that, we pass 'props' into Pet. We want to use these 'properites' passed from the parent component in our array of created elements. 
const Pet = (props) => {
    return React.createElement('div', {}, [
        // now, this array is expecting something from it's parent component...
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal), 
        React.createElement('h2', {}, props.breed), 
    ])
};


// (6): createing our first React component labeled 'App' which is simply a function that returns the results of whatever React.createElement() does. NOTE: All components must be capitalized. All we've done here is create our compnent 'factory'. Now we need to produce an instance of this component to actually use it. See step 7. 
const App = () => {
// React.createElement() is a method that simply prints brand new HTML tags for you.
    return React.createElement(
        // The first argument is whatever HTML element we're putting in here. In this case it's a 'div'.  
        "div", 
        // The scond argument (optional) is whatever attributes (id, src, class, etc.) you're passing into the provided element above. If it's an empty object or null, you're specifying that you're passing no attributes. You have to put something here. 
        {},
        // The third argument (optional) is whatever children elements you want. In this case, we're using React.createElement() again to print new child elements / HTML tags within our 'div' element
        [
            React.createElement("h1", {}, "Adopt Me!"),
            // we'll now provide properties that we want to provide to our Pet compnent instances:
            React.createElement(Pet, {
                animal: "Dog",
                name: "Doc", 
                breed: "Corgi"
            }),
            React.createElement(Pet, {
                animal: "Dog",
                name: "Cheif", 
                breed: "Corgi"
            }),
            React.createElement(Pet, {
                animal: "Loki",
                name: "Cat", 
                breed: "He's White..."
            }),
        ]
    )
};

// (7): creating a variable in which we want our component to exist in. In this case, we're placing the compnent in the 'div' tag specified by the id="root"
const container = document.getElementById("root");
// ReactDOM.createRoot() is th NEW way of rendering to the DOM from React. With React 18, we got something called concurrency. Concurrent Mode is now built into React. This is simply just the new way of showing the use of React 18. This used to be ReactDOM.render() which is the method you're used to. It would look like this: ReactDOM.render(container, <App/>, )
const root = createRoot(container);
// Notice we use React.createElement() again, but this time we're passing in the component. The component passed it then gets rendered. 
root.render(React.createElement(App));

// Note: before rendering all of this, ask yourself: "What do you expect to see?". Start from the end and work backwards. 