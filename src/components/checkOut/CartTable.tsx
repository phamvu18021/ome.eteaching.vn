import { Trash2 } from "lucide-react";
import { ProductCardFeature } from "../product/ProductCardFeature";

const products = [
  {
    id: 1,
    name: "Field Roast Chao Cheese Creamy Original",
    price: 2.51,
    image: "https://via.placeholder.com/60",
    rating: 4,
    selected: true,
  },
  {
    id: 2,
    name: "Blue Diamond Almonds Lightly Salted",
    price: 3.2,
    image: "https://via.placeholder.com/60",
    rating: 4,
    selected: true,
  },
  {
    id: 3,
    name: "Fresh Organic Mustard Leaves Bell Pepper",
    price: 2.43,
    image: "https://via.placeholder.com/60",
    rating: 4,
    selected: false,
  },
];

export default function CartTable({ type }: { type: string }) {
  return (
    <div className="overflow-x-auto bg-white  shadow-sm border border-gray-200">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-600  text-md">
          <tr>
            <th className="px-4 py-6 text-bold text-nest-dark text-md text-left">
              Sản phẩm
            </th>
            <th className="px-4 py-6 text-bold text-nest-dark text-md text-center">
              Giá tiền
            </th>
            {type == "cart" && (
              <th className="px-4 py-6 text-bold text-nest-dark text-md text-center">
                Xóa
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr
              key={p.id}
              className="border-t border-gray-200 hover:bg-gray-50 transition"
            >
              {/* Product info */}
              <td className="px-4 py-4 flex items-center gap-4">
                <ProductCardFeature product={p} />
              </td>

              {/* Subtotal */}
              <td className="px-4 py-4 text-center text-green-600 text-lg font-semibold">
                ${p.price.toFixed(2)}
              </td>

              {/* Remove */}
              {type === "cart" && (
                <td className="px-4 py-4 text-center">
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 size={18} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
