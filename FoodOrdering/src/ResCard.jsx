import { Card } from "flowbite-react";

export const ResCards = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, costForTwo, avgRating, cuisines } = resData?.info;
  const delivery = resData?.info?.sla?.deliveryTime;

  return (
    <div className="w-64 m-4">{/*  Fixed width and height for uniformity */}
      <Card
        className="h-full flex flex-col justify-between"  
        imgAlt="Restaurant Image"
        imgSrc={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      >
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        
        <div className="flex items-center justify-between mt-2">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">⭐{avgRating}</h4>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{delivery} mins</h4>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{costForTwo}</h4>
        </div>

        <p className="mt-4 font-normal text-gray-700 dark:text-gray-400">
          {cuisines?.join(", ")}
        </p>
      </Card>
    </div>
  );
};
