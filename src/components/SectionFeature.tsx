import { Tag, Truck, FileText, Grid, RefreshCw } from "lucide-react";
import Image from "next/image";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface SectionFeatureProps {
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: "tag",
    title: "Best prices & offers",
    description: "Orders $50 or more",
  },
  {
    icon: "truck",
    title: "Free delivery",
    description: "24/7 amazing services",
  },
  {
    icon: "fileText",
    title: "Great daily deal",
    description: "When you sign up",
  },
  {
    icon: "grid",
    title: "Wide assortment",
    description: "Mega Discounts",
  },
  {
    icon: "refresh",
    title: "Easy returns",
    description: "Within 30 days",
  },
];

export default function Features({ data }: { data: any }) {
  return (
    <section className="py-12">
      <div className="container max-w-[1540px] mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {data?.card?.map((item: any, i: number) => (
          <div
            key={i}
            className="flex space-x-4 items-start p-6 rounded-xl bg-[#f4f6fa] hover:shadow-md transition"
          >
            <Image
              src={item?.img?.node?.mediaItemUrl || "/images/icon-5.svg"}
              width={60}
              height={60}
              alt="feature-icon"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {item?.title || "Free shipping"}
              </h3>
              <p className="text-sm text-gray-500">
                {item?.sub || "Orders $50 or more"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
