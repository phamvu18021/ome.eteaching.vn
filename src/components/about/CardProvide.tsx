import Image from "next/image";

export const CardProvide = ({data}:{data: any}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:bg-white p-6 bg-white border border-gray-200 rounded-2xl">
            <Image
                src={data?.img?.node?.mediaItemUrl || "/images/icon-5.svg"}
                alt="Logo"
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-contain"
            />
        <p className="text-2xl font-bold text-nest-dark text-center">{data?.name || "Provided By"}</p>
        <p className="text-nest-gray text-center font-medium text-sm">{data?.content || "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"}</p>
    <a href={data?.link || "#"} className=" decoration-none text-nest-primary text-center font-medium text-sm">Xem thêm</a>
        </div>
    );
};