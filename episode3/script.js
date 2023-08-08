import React from 'react';
import ReactDOM from 'react-dom';

/*
const heading = React.createElement('h1', { id: 'heading' }, 'Hello World');
const root = ReactDOM.createRoot(document.getElementById('root'));
React.createElement => Reactelement - js object => HTMLElement (render)
root.render(heading);*/
//jsx
//let's create a jsx heading

/*
we don't need create element now we will be using jsx from now
*/
//!react element
// const jsxHeading = <h1 id="heading">Hello World using JSX</h1>; //jsx this piece of code become react element jsxHeading is react element
//!creating react element using jsx JSX => babel transpiles jsx to React.createElement and the same process is followed

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);
//!jsx is not html in javascript it's syntax is similar

//! react functional component is just normal js function which return some jsx
//React Component
// class based component -old
// functional based component-new
//state
//lifecycle
//props
//render
//class based component
//!This below is called component composition component inside component
const Title = () => {
    return (<h1 className='title'>Hello from title component</h1>);
};

let number = 10000;

const title = (<h1 className='title'>Hello from simple title js variable</h1>);

const HeadingComponent = () => {
    return (

        < div >
            {title}
            <Title />
            <h1 className='headingComponent'>Hello World using functional component   </h1>
        </div >);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
// let's understand how to render functional component in react
//render
//ReactDOM.render(<HeadingComponent />, document.getElementById('root'));
//! <HeadingComponent /> is a react element
root.render(<HeadingComponent />);