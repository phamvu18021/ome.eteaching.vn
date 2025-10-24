"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
  LogIn,
  UserPlus,
  Settings,
  Package,
  LogOut,
} from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { selectCartItemCount } from "@/store/slices/cartSlice";
import {
  selectIsAuthenticated,
  selectUser,
  clearUser,
} from "@/store/slices/userSlice";
import MobileNavigation from "./MobileNavigation";
import { getUserInitials } from "@/utils/getUserInit";
import SpecialOffers from "../SpecialOffers";

interface MainHeaderProps {
  logo?: {
    src: string;
    alt: string;
    href: string;
  };
  searchCategories?: string[];
  searchPlaceholder?: string;
  onSearch?: (query: string, category: string) => void;
  compareCount?: number;
  wishlistCount?: number;
  onCompareClick?: () => void;
  onWishlistClick?: () => void;
  onCartClick?: () => void;
  onAccountClick?: () => void;
  isMobileMenuOpen?: boolean;
  onToggleMobileMenu?: () => void;
  onMobileScrollChange?: (isScrolled: boolean) => void;
}

const MainHeader = ({
  logo = {
    src: "/nest-logo.svg",
    alt: "Nest",
    href: "/",
  },
  searchCategories = [
    "All Categories",
    "Milks and Dairies",
    "Wines & Alcohol",
    "Clothing & Beauty",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Seafood",
  ],
  searchPlaceholder = "Search for items...",
  onSearch,
  wishlistCount = 6,
  onWishlistClick,
  onCartClick,
  onAccountClick,
  isMobileMenuOpen = false,
  onToggleMobileMenu,
  onMobileScrollChange,
}: MainHeaderProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isMobileScrolled, setIsMobileScrolled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Redux selectors
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);
  const cartItemCount = useAppSelector(selectCartItemCount);

  // Add scroll effect for mobile header
  useEffect(() => {
    const handleScroll = () => {
      // For mobile, make header sticky after small scroll
      const newScrollState = window.scrollY > 20;
      setIsMobileScrolled(newScrollState);
      onMobileScrollChange?.(newScrollState);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onMobileScrollChange]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery, selectedCategory);
  };

  const handleLogout = () => {
    // Clear user from Redux store
    dispatch(clearUser());
    router.push("/");
  };

  return (
    <header
      className={`bg-white border-b z-[70] border-gray-100 transition-all duration-200 ${
        isMobileScrolled && !isMobileMenuOpen
          ? "xl:relative fixed top-0 left-0 right-0  shadow backdrop-blur-sm bg-white/95"
          : "relative "
      }`}
    >
      <div className="container max-w-[1540px] mx-auto px-6">
        {/* Main Header Row */}
        <div
          className={`flex items-center justify-between transition-all duration-200 ${
            isMobileScrolled ? "py-4 md:py-5 lg:py-6" : "py-4 md:py-5 lg:py-6"
          }`}
        >
          {/* Mobile/Tablet Menu Button - Show from xl down */}
          <div className="flex items-center xl:hidden">
            <button
              className="mr-3 p-1"
              onClick={onToggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-nest-gray" />
              ) : (
                <Menu className="h-6 w-6 text-nest-gray" />
              )}
            </button>
          </div>

          {/* Logo */}
          <Link
            href={logo.href}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-7 md:h-9 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Search Bar - Only show on xl+ screens */}
          <div className="hidden xl:flex flex-1 max-w-3xl mx-8">
            <form
              onSubmit={handleSearch}
              className="relative w-full flex items-center border border-gray-300 rounded-md  bg-white hover:border-nest-primary transition-colors duration-200 focus-within:border-nest-primary focus-within:ring-2 focus-within:ring-nest-primary/20"
            >
              <div className="relative flex items-center border-r border-gray-200 bg-white">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-transparent px-4 py-3.5 pr-8 font-medium text-sm text-nest-dark focus:outline-none cursor-pointer min-w-[160px]"
                >
                  {searchCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-nest-gray"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                  className="flex-1 w-full px-4 py-3.5 focus:outline-none text-sm text-nest-dark placeholder:text-nest-gray bg-white"
                />
                {isFocused && (
                  <div className="absolute z-50 max-w-md top-[100%] left-0 right-0">
                    <SpecialOffers />
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="bg-nest-primary hover:bg-green-600 text-white px-8 py-3.5 transition-all duration-200 flex items-center justify-center group"
                aria-label="Search"
              >
                <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </button>
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
            {/* Wishlist - Always visible on md+ */}
            <button
              onClick={onWishlistClick}
              className="hidden md:flex flex-col items-center cursor-pointer group transition-all duration-300 hover:scale-105"
              aria-label="Wishlist"
            >
              <div className="relative mb-1">
                <Heart className="h-5 w-5 lg:h-6 lg:w-6 text-nest-gray group-hover:text-nest-primary transition-colors duration-300" />
                {!!wishlistCount && wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-nest-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium ">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="text-xs text-nest-gray group-hover:text-nest-primary transition-colors duration-300 font-medium">
                Sản phẩm hot
              </span>
            </button>

            {/* Cart - Always visible */}
            <button
              onClick={onCartClick}
              className="flex flex-col items-center cursor-pointer group transition-all duration-300 hover:scale-105"
              aria-label="Cart"
            >
              <div className="relative mb-1">
                <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6 text-nest-gray group-hover:text-nest-primary transition-colors duration-300" />
                {!!cartItemCount && cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-nest-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium ">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:block text-xs text-nest-gray group-hover:text-nest-primary transition-colors duration-300 font-medium">
                Giỏ hàng
              </span>
            </button>
            {/* Account - Only show on xl+ with dropdown - Move to first position */}
            <div className="hidden xl:flex relative group">
              {isAuthenticated ? (
                <div className="w-14 h-14 rounded-full bg-nest-primary flex items-center justify-center text-white text-xl font-bold mx-auto mb-3 border-4 border-white shadow-sm">
                  {getUserInitials(user?.name || "Phạm Tâm")}
                </div>
              ) : (
                <button
                  onClick={onAccountClick}
                  className="flex flex-col items-center cursor-pointer group transition-all duration-300 hover:scale-105"
                  aria-label="Account"
                >
                  <div className="relative mb-1">
                    <User className="h-5 w-5 lg:h-6 lg:w-6 text-nest-gray group-hover:text-nest-primary transition-colors duration-300" />
                  </div>
                  <span className="text-xs text-nest-gray group-hover:text-nest-primary transition-colors duration-300 font-medium">
                    Tài khoản
                  </span>
                </button>
              )}

              {/* Account Dropdown - Higher z-index and improved styling */}
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[90] w-[200px] py-1">
                {isAuthenticated ? (
                  <>
                    {/* Logged In State */}
                    <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                      <p className="text-sm font-semibold text-nest-dark">
                        Hello {user?.name}!
                      </p>
                      <p className="text-xs text-nest-gray mt-1">
                        {user?.email}
                      </p>
                    </div>

                    <div className="py-1">
                      <a
                        href="/tai-khoan"
                        className="flex items-center px-4 py-2.5 text-sm text-nest-gray hover:bg-nest-light-gray hover:text-nest-primary transition-colors duration-200"
                      >
                        <User className="h-4 w-4 mr-3" />
                        Tài khoản của tôi
                      </a>
                      <a
                        href="/tai-khoan"
                        className="flex items-center px-4 py-2.5 text-sm text-nest-gray hover:bg-nest-light-gray hover:text-nest-primary transition-colors duration-200"
                      >
                        <Package className="h-4 w-4 mr-3" />
                        Đơn hàng đã mua
                      </a>
                      <a
                        href="/tai-khoan"
                        className="flex items-center px-4 py-2.5 text-sm text-nest-gray hover:bg-nest-light-gray hover:text-nest-primary transition-colors duration-200"
                      >
                        <Settings className="h-4 w-4 mr-3" />
                        Thiết lập
                      </a>
                    </div>

                    <div className="border-t border-gray-100 py-1">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
                      >
                        <LogOut className="h-4 w-4 mr-3" />
                        Đăng xuất
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Not Logged In State */}
                    <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                      <p className="text-sm font-semibold text-nest-dark">
                        Hello!
                      </p>
                      <p className="text-xs text-nest-gray mt-1">
                        Welcome to Nest
                      </p>
                    </div>

                    <div className="py-1">
                      <a
                        href="/dang-nhap"
                        className="flex items-center px-4 py-2.5 text-sm text-nest-gray hover:bg-nest-light-gray hover:text-nest-primary transition-colors duration-200"
                      >
                        <LogIn className="h-4 w-4 mr-3" />
                        Đăng nhập
                      </a>
                      <a
                        href="/dang-ky"
                        className="flex items-center px-4 py-2.5 text-sm text-nest-gray hover:bg-nest-light-gray hover:text-nest-primary transition-colors duration-200"
                      >
                        <UserPlus className="h-4 w-4 mr-3" />
                        Đăng ký
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Sidebar Navigation */}
        {isMobileMenuOpen && (
          <div
            className="xl:hidden fixed left-0 top-0 bottom-0 w-80 bg-white z-[80] shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto"
            style={{ position: "fixed" }}
          >
            <div className="p-4">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                <img src={logo.src} alt={logo.alt} className="h-8 w-auto" />
                <button
                  onClick={onToggleMobileMenu}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6 text-nest-gray" />
                </button>
              </div>

              {/* Search Box */}
              <div className="mb-6">
                <form onSubmit={handleSearch} className="relative flex">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-l-lg focus:outline-none focus:border-nest-primary text-nest-dark text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-nest-primary text-white px-4 py-3 rounded-r-lg transition-colors duration-200"
                    aria-label="Search"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </form>
              </div>

              {/* Main Navigation Menu */}
              <MobileNavigation />

              {/* Account Section */}
              <div className="mb-6 border-t border-gray-200 pt-4">
                <h3 className="text-base font-semibold text-nest-dark mb-3">
                  Tài Khoản
                </h3>

                {isAuthenticated ? (
                  <>
                    {/* Logged In State */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-semibold text-nest-dark">
                        Xin chào {user?.name}!
                      </p>
                      <p className="text-xs text-nest-gray mt-1">
                        {user?.email}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <a
                        href="/tai-khoan"
                        onClick={() => onToggleMobileMenu?.()}
                        className="w-full flex items-center py-2.5 px-3 text-nest-gray hover:text-nest-primary hover:bg-nest-light-gray transition-colors rounded-lg"
                      >
                        <User className="h-4 w-4 mr-3" />
                        <span className="text-sm font-medium">
                          Tài khoản của tôi
                        </span>
                      </a>

                      <a
                        href="/tai-khoan"
                        onClick={() => onToggleMobileMenu?.()}
                        className="w-full flex items-center py-2.5 px-3 text-nest-gray hover:text-nest-primary hover:bg-nest-light-gray transition-colors rounded-lg"
                      >
                        <Package className="h-4 w-4 mr-3" />
                        <span className="text-sm font-medium">
                          Đơn hàng đã mua
                        </span>
                      </a>

                      {/* <button
                        onClick={() => {
                          onWishlistClick?.()
                          onToggleMobileMenu?.()
                        }}
                        className="w-full flex items-center justify-between py-2.5 px-3 text-nest-gray hover:text-nest-primary hover:bg-nest-light-gray transition-colors rounded-lg"
                      >
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-3" />
                          <span className="text-sm font-medium">My Wishlist</span>
                        </div>
                        {wishlistCount > 0 && (
                          <span className="bg-nest-primary text-white text-xs px-2 py-1 rounded-full">
                            {wishlistCount}
                          </span>
                        )}
                      </button> */}

                      {/* <button
                        onClick={() => {
                          onCompareClick?.()
                          onToggleMobileMenu?.()
                        }}
                        className="w-full flex items-center justify-between py-2.5 px-3 text-nest-gray hover:text-nest-primary hover:bg-nest-light-gray transition-colors rounded-lg"
                      >
                        <div className="flex items-center">
                          <RotateCcw className="h-4 w-4 mr-3" />
                          <span className="text-sm font-medium">Compare</span>
                        </div>
                        {compareCount > 0 && (
                          <span className="bg-nest-primary text-white text-xs px-2 py-1 rounded-full">
                            {compareCount}
                          </span>
                        )}
                      </button> */}

                      <a
                        href="/tai-khoan"
                        onClick={() => onToggleMobileMenu?.()}
                        className="w-full flex items-center py-2.5 px-3 text-nest-gray hover:text-nest-primary hover:bg-nest-light-gray transition-colors rounded-lg"
                      >
                        <Settings className="h-4 w-4 mr-3" />
                        <span className="text-sm font-medium">Thiết lập</span>
                      </a>

                      {/* Logout */}
                      <div className="border-t border-gray-100 pt-2 mt-2">
                        <button
                          onClick={() => {
                            handleLogout();
                            onToggleMobileMenu?.();
                          }}
                          className="w-full flex items-center py-2.5 px-3 text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors rounded-lg"
                        >
                          <LogOut className="h-4 w-4 mr-3" />
                          <span className="text-sm font-medium">Đăng xuất</span>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Not Logged In State */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-semibold text-nest-dark">
                        Hello!
                      </p>
                      <p className="text-xs text-nest-gray mt-1">
                        Welcome to Nest
                      </p>
                    </div>

                    <div className="space-y-1">
                      <a
                        href="/dang-nhap"
                        onClick={() => onToggleMobileMenu?.()}
                        className="w-full flex items-center py-2.5 px-3 text-nest-gray hover:text-nest-primary hover:bg-nest-light-gray transition-colors rounded-lg"
                      >
                        <LogIn className="h-4 w-4 mr-3" />
                        <span className="text-sm font-medium">Đăng nhập</span>
                      </a>

                      <a
                        href="/dang-ky"
                        onClick={() => onToggleMobileMenu?.()}
                        className="w-full flex items-center py-2.5 px-3 text-nest-gray hover:text-nest-primary hover:bg-nest-light-gray transition-colors rounded-lg"
                      >
                        <UserPlus className="h-4 w-4 mr-3" />
                        <span className="text-sm font-medium">Đăng ký</span>
                      </a>
                    </div>
                  </>
                )}
              </div>

              {/* Contact Information */}
              {/* <div className="border-t border-gray-200 pt-4">
                <h3 className="text-base font-semibold text-nest-dark mb-3">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-nest-primary rounded-full flex items-center justify-center">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-nest-dark">Hotline</p>
                      <a href="tel:1900888" className="text-sm text-nest-primary hover:text-nest-dark">
                        1900 - 888
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-nest-primary rounded-full flex items-center justify-center">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-nest-dark">Email</p>
                      <a href="mailto:support@nest.com" className="text-sm text-nest-primary hover:text-nest-dark">
                        support@nest.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-nest-primary rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-nest-dark">Support Hours</p>
                      <p className="text-sm text-nest-gray">24/7 Support Center</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
