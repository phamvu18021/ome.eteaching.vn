/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactCard({ data }: { data: any }) {
  return (
    <div className="max-w-md p-6 bg-white ">
      <h2 className="text-2xl font-bold text-nest-primary">
        {data?.name || "Contact Us"}
      </h2>

      <p className="mt-2 text-gray-700">
        {data?.sub ||
          "We are here to help and answer any questions you might have. We look forward to hearing from you!"}
      </p>

      {data?.contacts?.map((contact: any, index: number) => (
        <Link href={contact.link} key={index} className="mt-2">
          <span className="font-medium text-gray-800">
            {contact?.nameContact || "Phone:"}
          </span>{" "}
          <span className="text-nest-primary ">
            {contact?.content || "123-456-7890"}
          </span>
        </Link>
      ))}
      <Link
        href={data?.link || "#"}
        className="mt-4 inline-flex items-center px-4 py-2 text-white bg-nest-primary rounded-md hover:bg-nest-secondary hover:-translate-y-2 duration-300 hover:border hover:border-nest-primary"
      >
        <MapPin className="w-4 h-4 mr-2" />
        View map
      </Link>
    </div>
  );
}
