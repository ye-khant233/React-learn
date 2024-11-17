import React from "react";
import Rating from "./Rating";

const ProductCard = ({
  product: {
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <div className="border border-black p-5 flex flex-col items-start gap-5">
      <img src={image}  className="h-48" alt=""/>
      <p className='font-bold line-clamp-2'>{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between items-center w-full mt-auto">
      <p>{price}</p>
      <button className=" text-sm border border-black px-3 py-1">Add cart</button>

      </div>
    </div>
  );
};

export default ProductCard;
