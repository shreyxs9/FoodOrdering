import { useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import ResCategory from './ResCategory';
import { useEffect, useState} from 'react';

const RestrauntMenu = () => {
  const [category, setCategory] = useState([]);
  const [showIndex, setShowIndex] =useState();



  useEffect(()=>{
    fetchCat();
  }, [])
  const {resId} = useParams();

  const {resInfo} = useRestrauntMenu(resId);
  const { name, costForTwoMessage, cuisines } = resInfo;
  const  fetchCat = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId);
    const json =  await data.json();
    const category = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( c =>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    setCategory(category);
    // console.log(category);
  }
  return (
    <div>
      <h1 className='font-bold text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>{cuisines?.join(", ")} - {costForTwoMessage}</p>
     {category.map((cat, index) => (
  <div key={index}>  
  <ResCategory data={cat?.card?.card}
 const showList={index === showIndex ?true: false}
  setShowIndex={() => setShowIndex(index)}
  />
   </div> 
))}
    </div>
  );
};

export default RestrauntMenu;
