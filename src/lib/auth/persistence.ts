// Local storage persistence for authentication state
const AUTH_STORAGE_KEY = 'nest_auth_user'

export interface StoredUser {
  id: string
  email: string
  name: string
  role: string
}

export const saveUserToStorage = (user: StoredUser): void => {
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
  } catch (error) {
    console.error('Failed to save user to storage:', error)
  }
}

export const getUserFromStorage = (): StoredUser | null => {
  try {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch (error) {
    console.error('Failed to get user from storage:', error)
    return null
  }
}

export const removeUserFromStorage = (): void => {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY)
  } catch (error) {
    console.error('Failed to remove user from storage:', error)
  }
}

export const isUserStorageSupported = (): boolean => {
  try {
    return typeof Storage !== 'undefined'
  } catch {
    return false
  }
}