import { useEffect, useState } from "react"


const useResList = () => {
    
const [rest, setRest] = useState([]);          // Holds the fetched restaurant data
const [searchText, setSearchText] = useState('');  // Holds the search text
const [filteredRest, setFilteredRest] = useState([]);  // Holds the filtered restaurant data

useEffect(() => {
    if (online) {  
      fetchData();
    }
  }, [online]);

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
  return {resetFilters,handleSearch,fetchData,rest};
}

export default useResList;
