/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { clean } from "@/lib/sanitizeHtml";

const ProductTabs = ({ product }: { product: any }) => {
  const [activeTab, setActiveTab] = useState<
    "description" | "additional" | "vendor" | "reviews"
  >("description");

  const tabs = [
    { id: "description" as const, label: "Description" },
    { id: "additional" as const, label: "Additional info" },
    { id: "vendor" as const, label: "Vendor" },
    { id: "reviews" as const, label: `Reviews (5)` },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition ${
                activeTab === tab.id
                  ? "text-nest-primary border-b-2 border-nest-primary"
                  : "text-nest-gray hover:text-nest-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 lg:p-8">
        {activeTab === "description" && (
          <div className="space-y-4">
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: clean(product?.description || ""),
              }}
            />
          </div>
        )}

        {activeTab === "additional" && (
          <div className="space-y-3">
            <table className="w-full">
              <tbody>
                {product?.info?.map((item: any, index: number) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-nest-light-gray" : ""}
                  >
                    <td className="px-4 py-3 text-sm font-semibold text-nest-dark w-1/3">
                      {item?.title}
                    </td>
                    <td className="px-4 py-3 text-sm text-nest-gray">
                      {item?.content}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "vendor" && (
          <div className="space-y-6">
            <div className="flex items-start gap-6 p-6 bg-nest-light-gray rounded-lg">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-nest-primary">
                  {product.vendor.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-nest-dark mb-2">
                  {product.vendor.name}
                </h3>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.vendor.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-nest-gray ml-1">
                      ({product.vendor.rating})
                    </span>
                  </div>
                </div>
                <p className="text-sm text-nest-gray">
                  Member since {product.vendor.since}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-nest-light-gray rounded-lg">
                <p className="text-2xl font-bold text-nest-primary mb-1">92%</p>
                <p className="text-sm text-nest-gray">Positive Feedbacks</p>
              </div>
              <div className="text-center p-4 bg-nest-light-gray rounded-lg">
                <p className="text-2xl font-bold text-nest-primary mb-1">50+</p>
                <p className="text-sm text-nest-gray">Products</p>
              </div>
              <div className="text-center p-4 bg-nest-light-gray rounded-lg">
                <p className="text-2xl font-bold text-nest-primary mb-1">4.5</p>
                <p className="text-sm text-nest-gray">Average Rating</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="bg-nest-light-gray rounded-lg p-6 text-center">
                  <div className="text-5xl font-bold text-nest-dark mb-2">
                    {5}
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(5)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-nest-gray">Based on {5} reviews</p>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-4">
                {[...Array(5)].map((review, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 last:border-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-nest-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-semibold text-nest-primary">
                          {"phạm văn a"}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-nest-dark">
                              {"phạm văn a"}
                            </h4>
                            <p className="text-sm text-nest-gray">
                              {new Date().toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < 5
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-nest-gray leading-relaxed text-sm">
                          {"đẹp"}
                        </p>
                        {/* {review.verified && (
                          <span className="inline-block mt-2 text-xs text-nest-primary font-semibold">
                            ✓ Verified Purchase
                          </span>
                        )} */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-nest-dark mb-4">
                Add a review
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-nest-dark mb-2">
                    Your rating *
                  </label>
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className="text-gray-300 hover:text-yellow-400 transition"
                      >
                        <Star className="w-6 h-6" />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-nest-dark mb-2">
                    Your review *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-nest-primary transition"
                    placeholder="Write your review here..."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-nest-dark mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-nest-primary transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-nest-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-nest-primary transition"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-nest-primary hover:bg-background-hover text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
