import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";
import { restaurantList } from "../../utils/constants.js";
const Body = () => {
    // useState: To create a state variable, searchText is local state variable
    const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
    console.log(listOfRestaurant);
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want..."
                ></input>
                <button
                    className="search-btn"
                    onClick={() => {
                        // filter the data
                        const data = listOfRestaurant.filter((res) => {
                            return res.data.avgRating > 4;
                        });
                        // update the state of restaurants list
                        setListOfRestaurant(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {listOfRestaurant.map((restaurant) => {
                    return (
                        <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                    );
                })}
            </div>
        </>
    );
};
export default Body;

