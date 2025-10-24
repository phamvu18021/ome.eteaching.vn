import { Metadata } from 'next'
import ShopPage from '@/components/listProduct'

export const metadata: Metadata = {
  title: 'Danh mục sản phẩm - OME E-Teaching',
  description: 'Khám phá các khóa học và sản phẩm giáo dục chất lượng cao tại OME E-Teaching. Tìm kiếm theo danh mục, giá cả và đánh giá.',
}

export default function ProductCategoryPage() {
  return <ShopPage />
}