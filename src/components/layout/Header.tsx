/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import MainHeader from "./MainHeader";
import Navigation from "./Navigation";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setUser, User } from "@/store/slices/userSlice";
import { handleUserInfo } from "@/utils/fetch-auth-odoo";
import nookies from "nookies";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileHeaderSticky, setIsMobileHeaderSticky] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cookies = nookies.get();
  const sessionLogId = cookies.session_log_id;

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (sessionLogId) {
      const fetchUserData = async () => {
        const dataUser = await handleUserInfo({
          session_log_id: sessionLogId,
        });
        dispatch(
          setUser({
            name: dataUser?.user_info?.name,
            email: dataUser?.user_info?.email,
            image: "",
            career: dataUser?.user_info?.career,
            age: dataUser?.user_info?.age,
            phone: dataUser?.user_info?.phone,
            gender: dataUser?.user_info?.gender,
          } as User)
        );
      };
      fetchUserData();
    }
  }, [sessionLogId]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Header actions
  const handleSearch = (query: string, category: string) => {
    console.log("Search:", query, "in category:", category);
    // Implement search logic
  };

  const handleCompareClick = () => {
    console.log("Compare clicked");
    setIsMobileMenuOpen(false);
    // Implement compare functionality
  };

  const handleWishlistClick = () => {
    console.log("Wishlist clicked");
    setIsMobileMenuOpen(false);
    // Implement wishlist functionality
  };

  const handleCartClick = () => {
    console.log("Cart clicked");
    setIsMobileMenuOpen(false);
    router.push("/gio-hang");
    // Implement cart functionality
  };

  const handleAccountClick = () => {
    console.log("Account clicked");
    setIsMobileMenuOpen(false);
    router.push("/tai-khoan");
    // Implement account functionality
  };

  const handleCategoryClick = (category: string) => {
    console.log("Category clicked:", category);
    setIsMobileMenuOpen(false);
    // Implement category navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileScrollChange = (isScrolled: boolean) => {
    setIsMobileHeaderSticky(isScrolled);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[80] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* <HeaderTop
        selectedLanguage={selectedLanguage}
        selectedCurrency={selectedCurrency}
        onLanguageChange={handleLanguageChange}
        onCurrencyChange={handleCurrencyChange}
      /> */}

      <MainHeader
        onSearch={handleSearch}
        onCompareClick={handleCompareClick}
        onWishlistClick={handleWishlistClick}
        onCartClick={handleCartClick}
        onAccountClick={handleAccountClick}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
        onMobileScrollChange={handleMobileScrollChange}
      />

      {/* Spacer for mobile sticky header */}
      {isMobileHeaderSticky && <div className="xl:hidden h-16 md:h-20"></div>}

      <Navigation onCategoryClick={handleCategoryClick} />
    </>
  );
};

export default Header;
