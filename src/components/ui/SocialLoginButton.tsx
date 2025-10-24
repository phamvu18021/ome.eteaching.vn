'use client'

import { ReactNode } from 'react'
import { Button, ButtonProps } from './Button'
import { cn } from '@/lib/utils'

interface SocialLoginButtonProps extends Omit<ButtonProps, 'variant'> {
  provider: 'google' | 'facebook' | 'apple'
  icon: ReactNode
}

const SocialLoginButton = ({ 
  provider, 
  icon, 
  children, 
  className,
  ...props 
}: SocialLoginButtonProps) => {
  const providerStyles = {
    google: 'border-gray-300 hover:border-gray-400 hover:shadow-md',
    facebook: 'border-blue-500 hover:border-blue-600 text-blue-600 hover:bg-blue-50',
    apple: 'border-gray-900 hover:border-gray-700 text-gray-900 hover:bg-gray-50'
  }

  return (
    <Button
      variant="social"
      fullWidth
      className={cn(
        'h-12 border-2 font-medium transition-all duration-200',
        providerStyles[provider],
        className
      )}
      {...props}
    >
      <span className="mr-3 flex-shrink-0">{icon}</span>
      {children}
    </Button>
  )
}

export { SocialLoginButton }