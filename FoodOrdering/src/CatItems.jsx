import React from 'react';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';

const CatItems = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch action
    dispatch(addItems(item));
    console.log(item);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.card.info.id} className="flex border-b-2 w-full border-gray-400 p-2 m-2 text-left">
          <div className="w-9/12"> 
            <div className="font-bold text-m">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
            </div>
            <div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 relative items-center flex">
            <button
              type="button"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={() =>handleAddItem(item)}
            >
              Add+
            </button>

            <img
              className="w-24 h-24 object-cover mt-6"  // Adjusted to fit button spacing
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId}
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatItems;
