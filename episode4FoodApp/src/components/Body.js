import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";
import { restaurantList } from "../../utils/constants.js";
function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}
const Body = () => {
    // useState: To create a state variable, searchText is local state variable
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                ></input>
                <button
                    className="search-btn"
                    onClick={() => {
                        // filter the data
                        const data = filterData(searchText, restaurants);
                        // update the state of restaurants list
                        setRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                    );
                })}
            </div>
        </>
    );
};
export default Body;