'use client'
import React from 'react'
import { ProductCardFeature } from '../product/ProductCardFeature'
export const SectionTopTrend = ({data}:{data:any}) => {

  return (
    <div className="mx-auto max-w-[1540px] -mt-6 mb-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {data?.map((item:any, index:number) => (
      <div key={index} className="w-full   rounded-md">
            <h3 className="text-xl lg:text-2xl font-bold text-nest-dark mb-4">{item.title || "Featured products"}</h3>
                <div className="mt-[20px] flex w-full">
                  <div className="w-[80px] border-b-[2px] border-nest-primary"></div>
                  <div className="w-full border-b-[1px] "></div>
                </div>
              <div className="space-y-4 mt-6">
                {item?.products?.map((product: any, i: number) => (
                  <ProductCardFeature key={i} product={product} />
                ))}
              </div>
      </div>
    ))}
    </div>
  ) 
 }