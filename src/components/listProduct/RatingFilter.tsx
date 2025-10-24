import React from 'react';
import { Star } from 'lucide-react';

interface RatingFilterProps {
  selectedRating: number;
  onRatingSelect: (rating: number) => void;
}

const RatingFilter: React.FC<RatingFilterProps> = ({ selectedRating, onRatingSelect }) => {
  const ratings = [5, 4, 3, 2, 1];

  const renderStars = (count: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <h3 className="text-lg font-bold text-nest-dark mb-4">Rating</h3>
        <div className="mt-[20px] flex w-full ">
          <div className="w-[80px] border-b-[2px] border-nest-primary"></div>
          <div className="w-full border-b-[1px] "></div>
        </div>
      <div className="space-y-2 mt-4">
        {ratings.map((rating) => (
          <label
            key={rating}
            className="flex items-center gap-2 cursor-pointer hover:text-nest-primary"
          >
            <input
              type="radio"
              name="rating"
              checked={selectedRating === rating}
              onChange={() => onRatingSelect(rating)}
              className="w-4 h-4 text-nest-primary border-gray-300 focus:ring-nest-primary"
            />
            <div className="flex items-center gap-2">
              {renderStars(rating)}
              <span className="text-sm text-gray-700">& up</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;