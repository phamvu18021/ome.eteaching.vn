import { Metadata } from 'next'
import FlashSale from '@/components/home/FlashSale'
import { flashSaleData } from '@/constants/home'

export const metadata: Metadata = {
  title: 'Flash Sale - Siêu Khuyến Mãi',
  description: 'Chương trình flash sale với các sản phẩm công nghệ giá tốt nhất. Thời gian có hạn!',
}

export default function FlashSalePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <FlashSale data={flashSaleData} />
      </div>
    </main>
  )
}