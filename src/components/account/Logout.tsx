'use client';

interface LogoutProps {
  onConfirm?: () => void;
  onCancel?: () => void;
}

export default function Logout({ onConfirm, onCancel }: LogoutProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-nest-dark">Logout</h3>
      </div>

      <div className="bg-white rounded-xl border-2 border-gray-200 p-8 lg:p-12">
        <div className="flex flex-col items-center text-center max-w-md mx-auto">
          <div className="w-20 h-20 rounded-full bg-yellow-50 flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>

          <h4 className="text-2xl font-bold text-nest-dark mb-3">Are you sure?</h4>
          <p className="text-nest-gray mb-8">
            Do you really want to logout from your account? You will need to login again to access your account.
          </p>

          <div className="flex gap-4 w-full">
            <button
              onClick={onCancel}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-nest-gray font-semibold rounded-lg hover:border-nest-primary hover:text-nest-primary transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-6 py-3 bg-nest-primary text-white font-semibold rounded-lg hover:bg-nest-primary/90 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-blue-900 mb-2">Quick Tips</h4>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>• Your cart items will be saved for your next visit</li>
              <li>• You can login anytime using your email and password</li>
              <li>• All your order history and saved addresses remain secure</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}