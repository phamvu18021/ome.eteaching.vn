import React from "react";
import { ShoppingCart, Star, Heart, Eye } from "lucide-react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode = "grid",
}) => {
  const router = useRouter();
  const showBadge = product.discount_percent_from_promotion;
  const badgeText = product.discount_percent_from_promotion;

  const badgeColor = "bg-nest-blue";

  if (viewMode === "list") {
    return (
      <div
        onClick={() => router.push(`/san-pham/${product?.slug_url_ome_etc}`)}
        className="relative hover:border-green-200 hover:cursor-pointer bg-white rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden"
      >
        {showBadge && (
          <span
            className={`absolute top-0 left-0 ${badgeColor} text-white px-6 py-1 text-xs font-semibold rounded-br-xl  z-10`}
          >
            {badgeText}%
          </span>
        )}
        <div className="flex items-center">
          {/* Product Image */}
          <div className="relative w-auto h-full flex-shrink-0 p-4">
            <div className="flex justify-center items-center h-full">
              <Image
                src={product?.ome_etc_product_image_url}
                alt={product.name}
                width={150}
                height={150}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 p-4">
            <div className="flex justify-between items-start h-full">
              <div className="flex-1">
                <p className="text-gray-400 text-xs mb-1">
                  {product?.category?.name}
                </p>

                <h3 className="font-semibold hover:text-nest-primary text-lg mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(5)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2">({5})</span>
                </div>

                {product?.category?.name && (
                  <p className="text-sm text-gray-500 mb-3">
                    By{" "}
                    <span className="text-nest-primary font-medium hover:text-nest-secondary">
                      {product?.category?.name}
                    </span>
                  </p>
                )}

                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-nest-primary font-bold text-xl mr-3">
                    {product.price.toLocaleString("vi-VN")}đ
                  </span>
                  {product.price_after_promotion && (
                    <span className="text-gray-400 line-through text-lg">
                      {product.price_after_promotion.toLocaleString("vi-VN")}đ
                    </span>
                  )}
                </div>

                {/* Description placeholder */}
                <p className="text-gray-600 text-sm line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-2 ml-4">
                <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Eye className="w-5 h-5 text-gray-600" />
                </button>
                <button className="flex items-center gap-1 bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-nest-primary hover:text-white transition">
                  <ShoppingCart size={16} />
                  <span className="text-sm">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (default)
  return (
    <div
      onClick={() => router.push(`/san-pham/${product?.slug_url_ome_etc}`)}
      className="relative hover:border-green-200 hover:cursor-pointer bg-white rounded-xl border shadow-sm hover:shadow-md transition"
    >
      {showBadge && (
        <span
          className={`absolute top-0 left-0 ${badgeColor} text-white px-[20px] py-[5px] text-xs font-semibold rounded-tl-xl rounded-br-xl`}
        >
          {badgeText}%
        </span>
      )}

      <div className="flex justify-center ">
        <Image
          src={product.ome_etc_product_image_url}
          alt={product.name}
          width={200}
          height={200}
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-400 text-xs mb-1">{product.category?.name}</p>

        <h3 className="font-semibold hover:text-nest-primary text-sm mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center text-sm text-gray-500 mb-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(5)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-1">({5})</span>
        </div>

        {product.category?.name && (
          <p className="text-xs text-gray-500 mb-2">
            By{" "}
            <span className="text-green-600 font-medium hover:text-nest-secondary">
              {product.category?.name}
            </span>
          </p>
        )}

        <div className="flex items-center justify-between">
          <div>
            <span className="text-green-600 font-bold text-lg mr-2">
              {product.price.toLocaleString("vi-VN")}đ
            </span>
            {product.price_after_promotion && (
              <span className="text-gray-400 line-through text-sm">
                {product.price_after_promotion.toLocaleString("vi-VN")}đ
              </span>
            )}
          </div>
          <button className="flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1 rounded-md hover:bg-nest-primary hover:text-white transition">
            <ShoppingCart size={16} />
            <span className="text-sm">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
