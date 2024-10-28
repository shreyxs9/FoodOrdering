import React, {useState} from 'react';
import CatItems from './CatItems';


const ResCategory = ({data,showList, setShowIndex}) => {
    const handleClick = () =>{
  setShowIndex();
}
  return (
    <div >
    <div className='w-1/2 p-4 mx-auto bg-gray-200 mb-4 shadow-lg '>
    <div onClick={handleClick}className='flex justify-between cursor-pointer'>
        <span  className='text-lg font-bold'>{data.title}({data.itemCards.length})</span>
      <span className='text-lg font-bold'>🔽</span> 
    </div>
    <div >
     {showList && <CatItems data={data.itemCards}/> } 
    </div>
    </div>
    </div>
  )

}

export default ResCategory;
