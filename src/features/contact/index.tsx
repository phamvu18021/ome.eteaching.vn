/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/product/Breadcrumb";
import SubContentContact from "@/components/contact/subContentContact";
import ContactCard from "@/components/contact/ContactCard";
import FormContact from "@/components/contact/FormContact";
import { getData } from "@/lib/getData";
import { GET_CONTACT } from "@/app/api/graphQL/getContact";

export default function Contact() {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData(GET_CONTACT);

        setData(data?.pageBy?.contact || {});
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Breadcrumb items={[{ label: "Liên hệ" }]} />

      <div className="max-w-[1340px] mx-auto py-[60px] px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col lg:flex-row  gap-8 mt-6 items-start lg:items-end">
          <div className="basis-1/3">
            <h1 className="text-2xl font-bold text-nest-primary">
              {data?.section1?.title || "Liên hệ"}
            </h1>
            <p className="text-nest-dark text-[48px] font-bold  ">
              {data?.section1?.title2 || "Lorent ipsum dolor sit amet"}
            </p>
            <p className="text-nest-gray mt-4">
              {data?.section1?.sub ||
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"}
            </p>
          </div>
          <div className="basis-2/3 grid grid-cols-1 lg:grid-cols-2 ">
            {data?.section1?.listSub?.map((item: any, index: number) => (
              <SubContentContact
                key={index}
                number={String(index + 1)}
                data={item}
                color_title={item?.color}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1540px] mx-auto h-[500px] mt-[60px] rounded-2xl overflow-hidden hidden md:block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.656266324221!2d105.8411673!3d21.0064036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb38f5e7b55%3A0xdefae4c5f5082a41!2zTmcuIDMyIMSQLiBUcsOjaSwgVHJ1bmcgVMOibSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1710000000000"
          width="100%"
          height="100%"
          style={{ border: 0, padding: "0 16px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="max-w-[1340px] mx-auto py-[60px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {data?.section2?.map((item: any, index: number) => (
          <ContactCard key={index} data={item} />
        ))}
      </div>
      <FormContact data={data?.section3} />
    </div>
  );
}
