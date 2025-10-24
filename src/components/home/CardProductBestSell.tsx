import React from "react";
import { ShoppingCart, Star, Heart, Eye } from "lucide-react";
import Image from "next/image";
import { Rating } from "../ui/Rating";
import ProgressBarWithSold from "./ProgressBarWithSold";



const CardProductBestSell = ({ product}:{product:any}) => {
  const showBadge = product.isNew || product.isBestSeller || product.discount;
  const badgeText = product.isNew ? 'New' : product.isBestSeller ? 'Hot' : product.discount ? 'Sale' : '';
  const badgeColor = product.isNew ? 'bg-nest-blue' : product.isBestSeller ? 'bg-nest-pink' : 'bg-nest-red';

  return (
    <div className="relative hover:border-green-200 hover:cursor-pointer bg-white rounded-xl border shadow-sm hover:shadow-md transition">
      {showBadge && (
        <span className={`absolute top-0 left-0 ${badgeColor} text-white px-[20px] py-[5px] text-xs font-semibold rounded-tl-xl rounded-br-xl`}>
          {badgeText}
        </span>
      )}

      <div className="flex justify-center ">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="p-4">
        
      <p className="text-gray-400 text-xs mb-1">{product.category}</p>

      <h3 className="font-semibold hover:text-nest-primary text-sm mb-2 line-clamp-2">
        {product.name}
      </h3>

      <Rating rating={product.rating} />

  
        <div className="mt-2 mb-2">
          <span className="text-green-600 font-bold text-lg mr-2">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <ProgressBarWithSold sold={90} total={140} />
        <button className="flex w-full mt-4 items-center font-semibold justify-center gap-1 bg-nest-primary text-white px-3 py-2 rounded-md hover:bg-nest-secondary hover:-translate-y-2 duration-300 transition">
          <ShoppingCart size={16} />
          <span className="text-sm">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default CardProductBestSell;
