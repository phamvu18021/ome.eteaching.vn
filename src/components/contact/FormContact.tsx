import Image from "next/image";

export default function FormContact({data}: {data: any}) {
  return (
    <div className="max-w-[1340px] mx-auto py-[60px] px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
      {/* Left: Form */}
      <div className="basis-2/3 w-full">
        <h4 className="text-nest-primary text-xl font-bold">{data?.title1 || "Contact Us"}</h4>
      <h2 className="text-4xl font-bold text-gray-900 mt-2">{data?.title2 || "Get in Touch" }</h2>
        <p className="text-gray-500 mt-2">
          {data?.content || "We are here to help and answer any questions you might have. We look forward to hearing from you!"}
          <span className="text-red-500">*</span>
        </p>

        <form className="mt-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            type="submit"
            className="px-8 py-3 bg-nest-dark text-white rounded-md hover:bg-nest-primary transition"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Right: Image */}
      <div className=" basis-1/3 justify-center lg:justify-end hidden lg:flex">
        <Image
          src={data?.img?.node?.mediaItemUrl || "/images/contact-2.png"}
          alt="Contact"
          width={500}
          height={500}
          className="rounded-lg shadow-lg object-contain w-full max-w-sm"
        />
      </div>
    </div>
  );
}
