/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Rating } from "../ui/Rating";

interface ProductCardProps {
  teacher: any;
  viewMode?: "grid" | "list";
}

const TeacherCard: React.FC<ProductCardProps> = ({
  teacher,
  viewMode = "grid",
}) => {
  const router = useRouter();
  console.log(teacher?.image_url);

  if (viewMode === "list") {
    return (
      <div
        onClick={() => router.push(`/giang-vien/${teacher.slug}`)}
        className="relative hover:border-green-200 hover:cursor-pointer bg-white rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden"
      >
        <div className="flex items-center">
          {/* Product Image */}
          <div className="relative w-48 h-48 flex-shrink-0">
            <div className="flex justify-center items-center h-full">
              <Image
                src={teacher.image_url}
                alt={teacher.name}
                width={150}
                height={150}
                className="h-32 w-auto object-contain"
              />
            </div>
          </div>

          {/* teacher Info */}
          <div className="flex-1 p-4">
            <div className="flex justify-between items-start h-full">
              <div className="flex-1">
                <h3 className="font-semibold hover:text-nest-primary text-lg mb-2 line-clamp-2">
                  {teacher.name}
                </h3>
                {/* Rating */}

                <Rating rating={teacher?.rating} />

                <div className="bg-green-100 text-nest-primary text-xs font-semibold mr-2 px-4 mb-2 py-2 rounded w-fit">
                  {`${teacher?.course_count} khóa học` || "380 course"}
                </div>

                {teacher?.slug && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {teacher.slug}
                  </p>
                )}

                {/* Description placeholder */}
                <p className="text-gray-600 text-sm line-clamp-2">
                  {teacher?.desc || "giáo viên về dinh dưỡng"}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-end space-y-2 ml-4">
                <button
                  onClick={() => router.push(`/giang-vien/${teacher?.slug}`)}
                  className="flex items-center gap-1 text-white bg-nest-primary px-4 py-2 rounded-lg hover:bg-nest-secondary transition"
                >
                  <span className="text-sm font-semibold">Xem khóa học</span>
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
      onClick={() => router.push(`/giang-vien/${teacher?.slug}`)}
      className="relative hover:border-green-200 hover:cursor-pointer bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition"
    >
      <div className="flex justify-center mb-3">
        <Image
          src={teacher?.image_url}
          alt={teacher?.name}
          width={200}
          height={200}
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center h-fit gap-4">
          <div>
            <h3 className="font-bold hover:text-nest-primary text-2xl mb-2 line-clamp-2">
              {teacher.name}
            </h3>
            <Rating rating={teacher?.rating} />
          </div>
          <div className="bg-green-100 h-fit text-nest-primary text-xs font-semibold mr-2 px-2 mb-2 py-2 rounded w-fit">
            {`${teacher?.course_count} khóa học` || "380 course"}
          </div>
        </div>

        {teacher.slug && (
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {teacher.slug}
          </p>
        )}

        {/* Description placeholder */}
        <p className="text-gray-600 text-sm line-clamp-2 mb-6">
          {teacher?.desc || "giáo viên về dinh dụng"}
        </p>

        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push(`/giang-vien/${teacher?.slug}`)}
            className="flex items-center gap-1 bg-nest-primary px-3 py-1 rounded-md mb-4 hover:bg-nest-secondary transition"
          >
            <span className="text-sm font-semibold text-white">
              Xem khóa học
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
