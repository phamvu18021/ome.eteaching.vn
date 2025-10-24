import { Star} from "lucide-react";
export const Rating = ({ rating }: { rating: number }) => {
    return (
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-nest-gray text-sm font-bold">({rating})</span>
                </div>
    )
}