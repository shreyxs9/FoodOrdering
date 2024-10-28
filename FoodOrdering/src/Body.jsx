import { useEffect, useState } from 'react';
import { ResCards } from './ResCard.jsx';
import Shimmer from './Shimmer.jsx';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus.js';

const Body = () => {
  const [rest, setRest] = useState([]);          // Holds the fetched restaurant data
  const [searchText, setSearchText] = useState('');  // Holds the search text
  const [filteredRest, setFilteredRest] = useState([]);  // Holds the filtered restaurant data
  const OnlineStatus = useOnlineStatus();

  useEffect(() => {
      fetchData(); 
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRest(restaurants);
    setFilteredRest(restaurants);  // Set both the main and filtered state to the fetched data
  };

  const handleSearch = () => {
    const filtered = rest.filter((r) => 
      r?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRest(filtered);
  };

  const resetFilters = () => {
    setFilteredRest(rest);  // Reset the filtered state back to the original fetched data
    setSearchText('');  // Clear the search text
  };

  if (!OnlineStatus) {
  return (
    <h1>Oops! It looks like you're offline. Check your internet connection.</h1>
  );
};

  if (rest.length === 0) {
    return (
      <div className="rescollection">
        {Array(12).fill('').map((_, index) => <Shimmer key={index} />)}
      </div>
    );
  }

  return (
    <div className="p-4 w-full"> 
      <div className="flex mb-4"> 
        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ml-2 mr-6"
          onClick={() => {
            const topRatedRest = rest.filter(r => r?.info?.avgRating > 4.5);
            setFilteredRest(topRatedRest);
          }}>
          Top Rated Restaurants
        </button>

        <input 
          type="text" 
          value={searchText}  
          placeholder="Search for a restaurant" 
          className="p-2 border rounded-lg"
          onChange={(e) => setSearchText(e.target.value)} 
        />

        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ml-2"
          onClick={handleSearch}>
          Search
        </button>

        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
          onClick={resetFilters}>
          Reset
        </button>
      </div>

   <div className="flex flex-wrap justify-start gap-4">  {/* Flexbox container with wrapping */}
  {filteredRest.length > 0 ? (
    filteredRest.map((res) => (
      <Link key={res?.info?.id} to={"/restraunts/" + res?.info?.id}>
        <ResCards resData={res} />
      </Link>
    ))
  ) : (
    <p>No restaurants found.</p>
  )}
</div>


    </div>
  );
};

export default Body;
