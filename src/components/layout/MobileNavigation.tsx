'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname , useRouter} from 'next/navigation'
import { ChevronDown, ChevronUp } from 'lucide-react'
import TMenus from '@/router/routers'

const MobileNavigation = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null)

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  return (
    <nav className="xl:hidden bg-white border-t border-gray-200">
      <div className="px-4 pt-3 space-y-2">
            <button
              onClick={() => {
                router.push('/danh-muc-san-pham')
                console.log('Browse All Categories clicked')
           
              }}
              className="flex  ml-4 items-center space-x-2 cursor-pointer px-6 py-2 text-white rounded-lg bg-nest-primary  hover:bg-background-hover transition-colors group"
            >
              <span className="font-semibold">Tất cả danh mục</span>
            </button>
        {TMenus.map((item, index) => {
          const isOpen = openMenu === index
          return (
            <div key={index}>
              <div
                onClick={() => setOpenMenu(isOpen ? null : index)}
                className={`w-full flex border-gray-200 ${index === TMenus.length - 1 ? '' : 'border-b'} items-center justify-between px-2 py-2 text-left font-semibold transition-colors ${
                  isActive(item.path)
                    ? 'text-nest-primary'
                    : 'text-nest-dark hover:text-nest-primary'
                }`}
              >
                    <Link
                                href={item.path}
                                className={`block font-medium px-2  py-2 text-sm transition-colors ${
                                  isActive(item.path)
                                    ? 'text-nest-primary'
                                    : 'text-nest-dark hover:text-nest-primary'
                                }`}
                              >
                                {item.title}
                              </Link>
                {item.childs &&
                  (<div className='px-3' onClick={() => setOpenMenu(isOpen ? null : index)}>
                    {isOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                  </div>)}
              </div>

              {/* Level 2 */}
              {isOpen && item.childs && (
                <div className="pl-4  border-gray-200 space-y-1">
                  {item.childs.map((child, cIndex) => {
                    const isSubOpen = openSubMenu === cIndex
                    return (
                      <div key={cIndex}>
                        <div

                          className={`w-full flex font-medium items-center justify-between px-2 py-2 text-sm transition-colors ${
                            isActive(child.path)
                              ? 'text-nest-primary'
                              : 'text-nest-dark hover:text-nest-primary'
                          }`}
                        >
                          <Link
                            href={child.path}
                            className={`block font-medium px-2 py-2 text-sm transition-colors ${
                              isActive(child.path)
                                ? 'text-nest-primary'
                                : 'text-nest-dark hover:text-nest-primary'
                            }`}
                          >{child.title}</Link>
                          {child.childs &&
                            (<div className='px-3' onClick={() => setOpenSubMenu(isSubOpen ? null : cIndex)}>
                              {isSubOpen ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </div>)}
                        </div>

                        {/* Level 3 */}
                        {isSubOpen && child.childs && (
                          <div className="pl-4  border-gray-200 space-y-1">
                            {child.childs.map((subChild, sIndex) => (
                              <Link
                                key={sIndex}
                                href={subChild.path}
                                className={`block font-medium px-2 py-2 text-sm transition-colors ${
                                  isActive(subChild.path)
                                    ? 'text-nest-primary'
                                    : 'text-nest-dark hover:text-nest-primary'
                                }`}
                              >
                                {subChild.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileNavigation
