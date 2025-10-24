'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface HeaderTopProps {
  topLinks?: {
    label: string
    href: string
    count?: number
  }[]
  helpPhone?: string
  languages?: {
    code: string
    label: string
  }[]
  currencies?: {
    code: string
    label: string
    symbol: string
  }[]
  selectedLanguage?: string
  selectedCurrency?: string
  onLanguageChange?: (language: string) => void
  onCurrencyChange?: (currency: string) => void
}

const HeaderTop = ({
  topLinks = [
    { label: "About Us", href: "/about" },
    { label: "My Account", href: "/account" },
    { label: "Wishlist", href: "/wishlist", count: 6 },
    { label: "Order Tracking", href: "/order-tracking" }
  ],
  helpPhone = "+ 1800 900",
  languages = [
    { code: "en", label: "English" },
    { code: "vi", label: "Vietnamese" },
    { code: "fr", label: "French" }
  ],
  currencies = [
    { code: "USD", label: "USD", symbol: "$" },
    { code: "VND", label: "VND", symbol: "₫" },
    { code: "EUR", label: "EUR", symbol: "€" }
  ],
  selectedLanguage = "en",
  selectedCurrency = "USD",
  onLanguageChange,
  onCurrencyChange
}: HeaderTopProps) => {
  return (
    <>
      {/* Desktop Header Top */}
      <div className="bg-nest-light-gray py-2.5 text-[11px] hidden lg:block ">
        <div className="container max-w-[1540px] mx-auto px-6 flex justify-between items-center">
          {/* Left Links */}
          <div className="flex items-center space-x-5 text-nest-gray">
            {topLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-nest-primary transition-colors duration-200 relative flex items-center"
              >
                <span>{link.label}</span>
                {link.count && link.count > 0 && (
                  <span className="ml-1 bg-nest-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-medium">
                    {link.count}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-5 text-nest-gray text-[11px]">
            {/* Help Phone */}
            <div className="flex items-center space-x-1">
              <span>Need help? Call Us:</span>
              <a
                href={`tel:${helpPhone.replace(/\s/g, '')}`}
                className="text-nest-primary font-semibold hover:text-nest-dark transition-colors duration-200"
              >
                {helpPhone}
              </a>
            </div>

            {/* Language Selector */}
            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-nest-gray">
                  {languages.find(lang => lang.code === selectedLanguage)?.label}
                </span>
                <ChevronDown className="h-3 w-3 text-nest-gray group-hover:rotate-180 transition-transform duration-200" />
              </div>
              <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[120px]">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => onLanguageChange?.(language.code)}
                    className="block w-full text-left px-3 py-2 text-sm text-nest-gray hover:bg-nest-light-gray hover:text-nest-primary transition-colors duration-200"
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Currency Selector */}
            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-nest-gray">
                  {currencies.find(curr => curr.code === selectedCurrency)?.code}
                </span>
                <ChevronDown className="h-3 w-3 text-nest-gray group-hover:rotate-180 transition-transform duration-200" />
              </div>
              <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[100px]">
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => onCurrencyChange?.(currency.code)}
                    className="block w-full text-left px-3 py-2 text-sm text-nest-gray hover:bg-nest-light-gray hover:text-nest-primary transition-colors duration-200"
                  >
                    <span className="flex items-center justify-between">
                      <span>{currency.code}</span>
                      <span className="text-nest-primary">{currency.symbol}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Social Follow */}
            <div className="flex items-center space-x-2">
              <span className="text-nest-gray">Follow us:</span>
              <div className="flex space-x-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white text-xs transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white text-xs transition-colors duration-200"
                  aria-label="Follow us on Twitter"
                >
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white text-xs transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.35-1.052-2.35-2.35s1.052-2.35 2.35-2.35 2.35 1.052 2.35 2.35-1.053 2.35-2.35 2.35zm7.718 0c-1.297 0-2.35-1.052-2.35-2.35s1.052-2.35 2.35-2.35 2.35 1.052 2.35 2.35-1.053 2.35-2.35 2.35z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Header Top - Compact Version */}
      <div className="bg-nest-light-gray py-2 text-[10px] lg:hidden">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Mobile Language/Currency */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-nest-gray text-[10px]">
                  {languages.find(lang => lang.code === selectedLanguage)?.code.toUpperCase()}
                </span>
                <ChevronDown className="h-2.5 w-2.5 text-nest-gray group-hover:rotate-180 transition-transform duration-200" />
              </div>
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[100px]">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => onLanguageChange?.(language.code)}
                    className="block w-full text-left px-3 py-2 text-xs text-nest-gray hover:bg-nest-light-gray hover:text-nest-primary transition-colors duration-200"
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-nest-gray text-[10px]">
                  {currencies.find(curr => curr.code === selectedCurrency)?.code}
                </span>
                <ChevronDown className="h-2.5 w-2.5 text-nest-gray group-hover:rotate-180 transition-transform duration-200" />
              </div>
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[80px]">
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => onCurrencyChange?.(currency.code)}
                    className="block w-full text-left px-3 py-2 text-xs text-nest-gray hover:bg-nest-light-gray hover:text-nest-primary transition-colors duration-200"
                  >
                    <span className="flex items-center justify-between">
                      <span>{currency.code}</span>
                      <span className="text-nest-primary">{currency.symbol}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Help Phone */}
          <div className="flex items-center space-x-1">
            <span className="text-nest-gray text-[10px] hidden sm:inline">Call:</span>
            <a
              href={`tel:${helpPhone.replace(/\s/g, '')}`}
              className="text-nest-primary font-semibold text-[10px] hover:text-nest-dark transition-colors duration-200"
            >
              {helpPhone}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTop