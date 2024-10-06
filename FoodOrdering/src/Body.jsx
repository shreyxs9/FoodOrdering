import './Body.css';
import restaurants from './assets/Data';
import {useState} from 'react';
import {ResCards} from './ResCard.jsx';

const Body = () => {
  const [rest, setrest] = useState(restaurants);
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
