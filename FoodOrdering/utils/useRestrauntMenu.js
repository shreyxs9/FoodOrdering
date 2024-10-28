import React, { useEffect, useState } from 'react';

const useRestrauntMenu = (resId) => { 
    const [resInfo, setResInfo] = useState({});
    // const [itemCards, setItemCards] = useState([]);

    useEffect(() =>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
        const data= await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId);
        const json = await data.json();
        setResInfo(json?.data?.cards[2]?.card?.card?.info || {});
        // const menuItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
        // setItemCards(menuItems);
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
        
    }
  return {resInfo}
}

export default useRestrauntMenu;

