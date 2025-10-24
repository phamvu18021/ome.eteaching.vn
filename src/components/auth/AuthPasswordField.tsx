import { useState } from 'react'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'

interface AuthPasswordFieldProps {
  id: string
  name: string
  label: string
  value: string
  error?: string
  placeholder?: string
  required?: boolean
  autoComplete?: string
  icon?: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function AuthPasswordField({
  id,
  name,
  label,
  value,
  error,
  placeholder,
  required = false,
  autoComplete,
  icon,
  onChange,
}: AuthPasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

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
          type={showPassword ? "text" : "password"}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className={`block w-full ${icon ? 'pl-10' : 'px-4'} pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
            error ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-green-600 transition-colors"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-400" />
          ) : (
            <Eye className="h-5 w-5 text-gray-400" />
          )}
        </button>
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