'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronRight,  ChevronDown } from 'lucide-react'
import TMenus from '@/router/routers'

interface NavigationProps {
  supportPhone?: string
  supportText?: string
  onCategoryClick?: (category: string) => void
}

const Navigation = ({
  supportPhone = '1900 - 888',
  supportText = '24/7 Support Center',
  onCategoryClick,
}: NavigationProps) => {
  const pathname = usePathname() // 👉 lấy path hiện tại
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [navOffsetTop, setNavOffsetTop] = useState(0)

  useEffect(() => {
    const calculateNavPosition = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        const rect = nav.getBoundingClientRect()
        const offsetTop = rect.top + window.scrollY
        setNavOffsetTop(offsetTop)
      }
    }

    const timer = setTimeout(calculateNavPosition, 100)
    window.addEventListener('resize', calculateNavPosition)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', calculateNavPosition)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= navOffsetTop)
    }

    if (navOffsetTop > 0) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [navOffsetTop])

  // 👉 helper check active
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  return (
    <nav
      className={` bg-white border-t border-b border-gray-100 transition-all duration-200 hidden xl:block ${
        isScrolled
          ? 'fixed top-0 left-0 right-0 z-40 shadow-lg backdrop-blur-sm bg-white/95 animate-slideDown'
          : 'relative shadow-sm'
      }`}
    >
      <div className="container max-w-[1540px]  px-6 mx-auto ">
        <div
          className={`flex items-center justify-between transition-all duration-200 ${
            isScrolled ? 'py-3' : 'py-4'
          }`}
        >
          {/* Left Menu */}
          <div className="flex items-center w-full justify-between space-x-6 xl:space-x-8">
            <button
              onClick={() => {
                router.push('/san-pham')
                console.log('Browse All Categories clicked')
                onCategoryClick?.('all-categories')
              }}
              className="flex items-center space-x-2 cursor-pointer px-6 py-2 text-white rounded-lg bg-nest-primary  hover:bg-background-hover transition-colors group"
            >
              <span className="font-semibold">Tất cả danh mục</span>
            </button>

            {/* Main Menu */}
            <div className='flex items-center space-x-6 xl:space-x-8'>
            {TMenus.map((item, index) => (
              <div key={index} className="relative group/item">
                <Link
                  href={item.path}
                  className={`flex items-center space-x-1 px-2 py-1 font-semibold transition-colors ${
                    isActive(item.path)
                      ? 'text-nest-primary'
                      : 'text-nest-dark hover:text-nest-primary'
                  }`}
                >
                  {item.title}
                  {item.childs && (
                    <ChevronDown className="h-4 w-4 ml-2 text-nest-gray group-hover/item:rotate-180 transition-transform duration-200" />
                  )}
                </Link>

                {/* Level 2 */}
                {item.childs && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-10 min-w-[200px]">
                    {item.childs.map((child, cIndex) => (
                      <div key={cIndex} className="relative group/subitem">
                        <Link
                          href={child.path}
                          className={`flex items-center justify-between px-3 py-2 text-sm transition-colors ${
                            isActive(child.path)
                              ? 'text-nest-primary bg-nest-light-gray'
                              : 'text-nest-gray hover:bg-nest-light-gray hover:text-nest-primary'
                          }`}
                        >
                          {child.title}
                          {child.childs && (
                            <ChevronRight className="h-3 w-3 text-nest-gray" />
                          )}
                        </Link>

                        {/* Level 3 */}
                        {child.childs && (
                          <div className="absolute top-0 left-full mt-0 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover/subitem:opacity-100 group-hover/subitem:visible transition-all duration-200 z-10 min-w-[200px]">
                            {child.childs.map((subChild, sIndex) => (
                              <Link
                                key={sIndex}
                                href={subChild.path}
                                className={`block px-3 py-2 text-sm transition-colors ${
                                  isActive(subChild.path)
                                    ? 'text-nest-primary bg-nest-light-gray'
                                    : 'text-nest-gray hover:bg-nest-light-gray hover:text-nest-primary'
                                }`}
                              >
                                {subChild.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
