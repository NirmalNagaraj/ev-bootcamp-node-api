import type { User } from "./types"

export const validateUser = (user: Partial<User>): string[] => {
  const errors: string[] = []

  if (!user.full_name) errors.push("Full name is required")
  if (!user.email) errors.push("Email is required")
  if (user.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) errors.push("Invalid email format")

  return errors
}

