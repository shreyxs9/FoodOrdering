import React from 'react'

const CatItems = ({data}) => {
  return (
      <div>
        {data.map((item) => ( 
            <div key={item.card.info.id} className='flex border-b-2 w-full border-gray-400 p-2 m-2 text-left'>
            <div className='w-9/12'>
                <div className='font-bold text-m' >
                <span>{item.card.info.name}</span> 
                <span> - ₹{item.card.info.price/100 ||item.card.info.defaultPrice/100  }</span>
            </div>
            <div>
                <p className='text-sm' >
                {item.card.info.description}
                </p>
            </div>
            </div>
             <div className='w-3/12 items-center flex'>
             <img className='w-25 h-25 object-cover'  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}  />
             </div>
            </div>

        ))}
      </div>
  )
}

export default CatItems;
