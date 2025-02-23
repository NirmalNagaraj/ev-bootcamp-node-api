import type { Wallet } from "./types"

export const validateWallet = (wallet: Partial<Wallet>): string[] => {
  const errors: string[] = []

  if (typeof wallet.user_id !== "number") errors.push("User ID is required and must be a number")
  if (typeof wallet.balance !== "number") errors.push("Balance is required and must be a number")
  if (!wallet.currency) errors.push("Currency is required")

  return errors
}

