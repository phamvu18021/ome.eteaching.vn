import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlice'
import productReducer from './slices/productSlice'
import filterReducer from './slices/filterSlice'
import { loadState, saveState } from "@/localStorage/localStorage";

const persistedLoginState = loadState({ state: "userState" });

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
    filters: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
    preloadedState: {
      user: persistedLoginState || undefined,
    },
})

  store.subscribe(() => {
    const state = store.getState();
    saveState({ state: state.user, stateType: "userState" }); // Lưu chỉ state của đăng nhập

  });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch