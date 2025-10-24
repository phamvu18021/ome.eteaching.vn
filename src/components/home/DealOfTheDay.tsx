'use client'
import React from 'react'
import DealCard from '../listProduct/CardDeal'

const DealOfTheDay = () => {
    return (
        <div className='mx-auto mt-12 max-w-[1540px] px-4'>
            <div className='flex items-center justify-between'>
            <p className="text-2xl lg:text-3xl font-bold text-nest-dark mb-4">Bán chạy mỗi ngày</p>
            <p className='text-nest-gray text-sm font-semibold hover:text-nest-primary hover:cursor-pointer'>Tất cả ưu đãi</p>
            </div>
            <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {[...Array(4)].map((_, index) => (
                    <DealCard key={index} />
                ))}
            </div>
        </div>
    )
}

export default DealOfTheDay