'use client';

interface Address {
  id: string;
  type: 'billing' | 'shipping';
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
  isDefault?: boolean;
}

interface MyAddressProps {
  addresses?: Address[];
}

const defaultAddresses: Address[] = [
  {
    id: '1',
    type: 'billing',
    name: 'Dianne Russell',
    address: '4140 Parker Rd.',
    city: 'Allentown',
    state: 'New Mexico',
    zipCode: '31134',
    country: 'United States',
    phone: '+1 234 567 8900',
    isDefault: true,
  },
  {
    id: '2',
    type: 'shipping',
    name: 'Dianne Russell',
    address: '3891 Ranchview Dr.',
    city: 'Richardson',
    state: 'California',
    zipCode: '62639',
    country: 'United States',
    phone: '+1 234 567 8900',
    isDefault: true,
  },
];

export default function MyAddress({ addresses = defaultAddresses }: MyAddressProps) {
  const getAddressIcon = (type: Address['type']) => {
    if (type === 'billing') {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      );
    }
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-nest-dark">My Address</h3>
        <button className="px-6 py-2.5 bg-nest-primary text-white font-semibold rounded-lg hover:bg-nest-primary/90 transition-colors">
          Add New Address
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-nest-primary/50 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    address.type === 'billing'
                      ? 'bg-purple-50 text-purple-600'
                      : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  {getAddressIcon(address.type)}
                </div>
                <div>
                  <h4 className="font-bold text-nest-dark capitalize">{address.type} Address</h4>
                  {address.isDefault && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-nest-primary/10 text-nest-primary text-xs font-semibold rounded-full">
                      Default
                    </span>
                  )}
                </div>
              </div>
              <button className="text-nest-gray hover:text-nest-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-2 text-nest-gray">
              <p className="font-semibold text-nest-dark">{address.name}</p>
              <p>{address.address}</p>
              <p>
                {address.city}, {address.state} {address.zipCode}
              </p>
              <p>{address.country}</p>
              {address.phone && <p>Phone: {address.phone}</p>}
            </div>

            <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
              <button className="flex-1 px-4 py-2 border-2 border-nest-primary text-nest-primary font-semibold rounded-lg hover:bg-nest-primary hover:text-white transition-colors">
                Edit
              </button>
              <button className="flex-1 px-4 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}