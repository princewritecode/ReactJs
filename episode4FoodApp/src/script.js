import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body.js';


const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />

        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);