import './Body.css';
import  restaurants  from './assets/Data';

export const ResCards = (props) => {
    const {resData}=props;
  const { name, cloudinaryImageId, costForTwo, avgRating, cuisines } = resData?.info;
  return (
    <div className="card">
      <img 
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} 
        alt={name} 
      />
      <div className="card-text">
        <h3>{name}</h3>
         <h4>{cuisines?.join(", ")}</h4> 
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
           </div>
    </div>
  );
};   
