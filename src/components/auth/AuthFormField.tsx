import { ReactNode } from 'react'
import { AlertCircle } from 'lucide-react'

interface AuthFormFieldProps {
  id: string
  name: string
  type: string
  label: string
  value: string
  error?: string
  placeholder?: string
  required?: boolean
  autoComplete?: string
  icon?: ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function AuthFormField({
  id,
  name,
  type,
  label,
  value,
  error,
  placeholder,
  required = false,
  autoComplete,
  icon,
  onChange,
}: AuthFormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className={`block w-full ${icon ? 'pl-10' : 'px-4'} ${icon ? 'pr-3' : 'px-4'} py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
            error ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}