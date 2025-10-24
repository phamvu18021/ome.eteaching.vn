// Hardcoded user database for demo purposes
export interface DemoUser {
  id: string
  email: string
  name: string
  password: string
  role: 'admin' | 'user'
}

export const DEMO_USERS: DemoUser[] = [
  {
    id: '1',
    email: 'admin@demo.com',
    name: 'Admin User',
    password: 'admin123',
    role: 'admin'
  },
  {
    id: '2', 
    email: 'user@demo.com',
    name: 'Demo User',
    password: 'user123',
    role: 'user'
  },
  {
    id: '3',
    email: 'test@demo.com', 
    name: 'Test User',
    password: 'test123',
    role: 'user'
  }
]

export const validateCredentials = (email: string, password: string): DemoUser | null => {
  const user = DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase())
  
  if (user && user.password === password) {
    return user
  }
  
  return null
}

export const findUserByEmail = (email: string): DemoUser | null => {
  return DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase()) || null
}