import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * Header
 *  -logo
 *  -Nav items
 * Body
 *  -search component
 *  -restaurant container
 *   -Restaurant card
 * Footer
 *  -copyright
 *  -Links
 *  -address
 *  -contact
 *
 */

//!Episode 3 practice
/*
const heading = (
    <h1>This is heading created using JSX buddy</h1>
);
const Title = () => {
    return (
        <h1>Hello from title component</h1>
    );
};
const HeadingComponent = () => {
    return (
        <div id="heading">
            {heading}
            <Title />
            <Title></Title>
            <h2>This is heading inside react component heading</h2>
        </div>
    );
};

*/

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard = {
    backgroundColor: '#f0f0f0'
};

const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className='restaurant-card' style={styleCard}>
            <img src='https://b.zmtcdn.com/data/pictures/7/19661497/513d5db6f43b7043d0effb9fb1b4db4a_o2_featured_v2.jpg?output-format=webp' className='resto-image1'></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <p>$10</p>
        </div>
    );
};

const Body = () => {
    return (
        <div className='body'>

            <div className='search-container'>
                <input type='text' placeholder='Search' />
            </div>

            <div className='restaurant-container'>
                {/*  restaurant card */}
                <RestaurantCard resName="socio curry" cuisine="Noodles ,North indian,asian" />
                <RestaurantCard resName="kfc" cuisine="Fast Food" rating="4.5" />
            </div>

        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            {/* header */}
            <Header />
            {/* body */}
            <Body />

            {/* footer */}


        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);