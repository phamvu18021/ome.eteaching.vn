/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { getData } from "@/lib/getData";
import React, { useState, useEffect } from "react";
import { GET_FOOTER } from "@/app/api/graphQL/getFooter";
import NewsletterSection from "../NewsletterSection";
import Features from "../SectionFeature";

const Footer = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData(GET_FOOTER);
        console.log("footer", data?.allFooter?.nodes[0]?.footerContent);
        setData(data?.allFooter?.nodes[0]?.footerContent || {});
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="bg-white max-w-full mx-auto px-6">
      <NewsletterSection data={data?.newsletter} />
      <Features data={data?.feature} />
      {/* Main Footer - 6 Column Layout */}
      <div className="py-8 lg:py-12 ">
        <div className="container max-w-[1540px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 lg:gap-8 xl:gap-10">
            {/* Column 1: Company Info with Logo */}
            <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-2 2xl:col-span-1">
              <Link href="/" className="inline-block mb-4 lg:mb-6">
                <Image
                  src={
                    data?.col1?.logo?.node?.mediaItemUrl || "/images/logo.svg"
                  }
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </Link>
              <p className="text-gray-700 mb-4 lg:mb-6 text-sm leading-relaxed">
                {data?.col1?.content ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst."}
              </p>
              <div className="space-y-2">
                {data?.col1?.contact?.map((item: any, index: number) => (
                  <Link
                    key={index}
                    href={item?.link}
                    className="flex items-start"
                  >
                    <span className="font-medium text-gray-800 mr-2 min-w-[60px] shrink-0 text-sm">
                      {item?.title || "Address:"}
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item?.content || "123 Main Street, Anytown, USA"}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Company */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-base">
                {data?.col2?.title || "Company"}
              </h3>
              <ul className="space-y-3">
                {data?.col2?.sub?.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.link}
                      className="text-gray-700 hover:text-nest-primary transition-colors duration-200 text-sm block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Account */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-base">
                {data?.col3?.title || "Company"}
              </h3>
              <ul className="space-y-3">
                {data?.col3?.page?.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.link}
                      className="text-gray-700 hover:text-nest-primary transition-colors duration-200 text-sm block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Corporate */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-base">
                {data?.col4?.title || "Company"}
              </h3>
              <ul className="space-y-3">
                {data?.col4?.sub?.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.link}
                      className="text-gray-700 hover:text-nest-primary transition-colors duration-200 text-sm block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Popular */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-base">
                {data?.col5?.title || "Company"}
              </h3>
              <ul className="space-y-3">
                {data?.col5?.sub?.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.link}
                      className="text-gray-700 hover:text-nest-primary transition-colors duration-200 text-sm block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 6: Install App */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-base">
                Install App
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                From App Store or Google Play
              </p>
              <div className="flex justify-between content-center items-center gap-4">
                <a href={data?.col6?.appleStore || "#"} className="block">
                  <Image
                    src="/images/app-store.jpg"
                    alt="Get it on App Store"
                    width={200}
                    height={200}
                    className="h-auto object-contain w-full"
                  />
                </a>
                <a href={data?.col6?.ggplay || "#"} className="block">
                  <Image
                    src="/images/google-play.jpg"
                    alt="Get it on Google Play"
                    width={200}
                    height={200}
                    className="h-auto object-contain w-full"
                  />
                </a>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">
                  Secured Payment Gateways
                </h4>
                <Image
                  src="/images/payment-method.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={200}
                  className="h-auto  w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200 py-6 lg:py-8">
        <div className="container max-w-[1540px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
            <div className="text-gray-700 text-sm text-center lg:text-left">
              <span className="lg:hidden">
                {data?.foooterEnd?.left || "© 2023 Nest. All rights reserved."}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
              {data?.foooterEnd?.center?.map((item: any, index: number) => (
                <Link
                  href={item.link}
                  key={index}
                  className="flex items-center space-x-2 text-sm text-gray-700"
                >
                  <span className="text-nest-primary">📞</span>
                  <p className="font-semibold text-nest-primary hover:text-gray-900 transition-colors">
                    {item?.phone || "123-456-7890"}
                  </p>
                  <span>{item?.content || "Support"}</span>
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-700 text-sm">
                {data?.foooterEnd?.right?.title || "Follow us"}
              </span>
              <div className="flex space-x-2">
                {data?.foooterEnd?.right?.icon?.map(
                  (social: any, index: number) => (
                    <a
                      key={index}
                      href={social?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-7 lg:w-8 h-7 lg:h-8 bg-nest-primary rounded-full flex items-center justify-center text-white transition-colors`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <i className={`${social.icon} text-white font-bold`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
