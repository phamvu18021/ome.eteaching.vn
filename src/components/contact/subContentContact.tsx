/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SubContentContact({
  number,
  data,
  color_title,
}: {
  number: string;
  data: any;
  color_title: string;
}) {
  return (
    <div>
      <p
        className={`${color_title} font-bold text-2xl`}
      >{`${number}. ${data?.name}`}</p>
      <p className="text-nest-gray mt-2">{data?.sub}</p>
    </div>
  );
}
