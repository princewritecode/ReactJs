import React from 'react';
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About us</li>
                    <li>Cart</li>
                </ul>
            </div>
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
                <RestaurantCard />
                <RestaurantCard />
            </div>

        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className='restaurant-card'>
            <img src='https://b.zmtcdn.com/data/pictures/7/19661497/513d5db6f43b7043d0effb9fb1b4db4a_o2_featured_v2.jpg?output-format=webp' className='resto-image1'></img>
            <h3>KFC</h3>
            <h4>Indian,asian</h4>
            <p>$10</p>
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



