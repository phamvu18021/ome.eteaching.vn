/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export default function NewsletterSection({ data }: { data: any }) {
  return (
    <div className="max-w-[1540px] mx-auto px-6">
      <div
        style={{
          backgroundImage: `url(/images/banner-10.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative bg-[#d8f1e5] rounded-2xl overflow-hidden"
      >
        <div className="container px-16 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl lg:text-4xl  font-bold text-nest-dark mb-3">
              {data?.title || "Stay home & get your daily needs from our shop"}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {data?.sub || "Start You&apos;r Daily Shopping with"}
              <span className="text-green-600 font-semibold">
                {data?.hightline || "Nest Mart"}
              </span>
            </p>

            <form className="flex bg-white rounded-full overflow-hidden shadow max-w-md">
              <div className="flex items-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12H8m0 0l4-4m-4 4l4 4"
                  />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Your email address"
                className=" p-0 md:px-4 md:py-4 flex-1 focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-nest-primary rounded-full hover:bg-green-700 text-white px-8 py-4 font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="absolute bottom-0 right-10">
            <Image
              width={400}
              height={400}
              src={data?.img?.node?.mediaItemUrl || "/images/banner-13.png"}
              alt="Vegetable"
              className="max-h-72 hidden lg:block object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
