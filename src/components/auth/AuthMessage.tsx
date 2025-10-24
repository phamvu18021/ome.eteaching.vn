import { CheckCircle, AlertCircle, Info } from 'lucide-react'

interface AuthMessageProps {
  type: 'success' | 'error' | 'info'
  text: string
}

export default function AuthMessage({ type, text }: AuthMessageProps) {
  const styles = {
    success: 'bg-green-50 border border-green-200 text-green-700',
    error: 'bg-red-50 border border-red-200 text-red-700',
    info: 'bg-blue-50 border border-blue-200 text-blue-700'
  }

  const icons = {
    success: <CheckCircle className="h-5 w-5" />,
    error: <AlertCircle className="h-5 w-5" />,
    info: <Info className="h-5 w-5" />
  }

  return (
    <div className={`p-4 rounded-lg flex items-center space-x-2 ${styles[type]}`}>
      {icons[type]}
      <span className="text-sm font-medium">{text}</span>
    </div>
  )
}