import './Body.css';
import restaurants from './assets/Data';
import {useEffect, useState} from 'react';
import {ResCards} from './ResCard.jsx';

const Body = () => {
  const [rest, setrest] = useState([]);
  useEffect( ()=>{
    fetchdata();
  }, [])
  const fetchdata = async () => {
     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const json = await data.json();
     console.log(json);
     console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  if(rest.length === 0){
    return (
    <h1>loading....</h1>);
  }
  return (
    <div className="body-comp">  
   <button className='filter-btn'
       onClick= {() => {
       const filteredrest=rest.filter((r)=> (r?.info?.avgRating>4));
        setrest(filteredrest);
        }}> 
        Top Rated Restaurants
      </button>
      <div className="rescollection">
        {rest.map((res) => (
          <ResCards key={res?.info?.id} resData={res} /> 
        ))}
      </div>  
    </div>
  );
};

export default Body;
