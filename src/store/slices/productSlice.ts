import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
}

interface ProductState {
  products: Product[]
  filteredProducts: Product[]
  selectedCategory: string
  searchQuery: string
  isLoading: boolean
  error: string | null
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  selectedCategory: 'all',
  searchQuery: '',
  isLoading: false,
  error: null,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
      state.filteredProducts = action.payload
      state.isLoading = false
      state.error = null
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload
      state.filteredProducts = filterProducts(
        state.products,
        action.payload,
        state.searchQuery
      )
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.filteredProducts = filterProducts(
        state.products,
        state.selectedCategory,
        action.payload
      )
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

// Helper function to filter products
const filterProducts = (
  products: Product[],
  category: string,
  searchQuery: string
): Product[] => {
  let filtered = products

  // Filter by category
  if (category !== 'all') {
    filtered = filtered.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    )
  }

  // Filter by search query
  if (searchQuery) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return filtered
}

export const {
  setProducts,
  setLoading,
  setError,
  setSelectedCategory,
  setSearchQuery,
  clearError,
} = productSlice.actions

export default productSlice.reducer

// Selectors
export const selectProducts = (state: { products: ProductState }) => state.products.products
export const selectFilteredProducts = (state: { products: ProductState }) => state.products.filteredProducts
export const selectSelectedCategory = (state: { products: ProductState }) => state.products.selectedCategory
export const selectSearchQuery = (state: { products: ProductState }) => state.products.searchQuery
export const selectProductsLoading = (state: { products: ProductState }) => state.products.isLoading
export const selectProductsError = (state: { products: ProductState }) => state.products.error