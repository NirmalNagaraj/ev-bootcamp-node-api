import pool from "../../config/database"
import type { Wallet } from "./types"
import * as queries from "./queries"

export const createWallet = async (wallet: Omit<Wallet, "wallet_id">): Promise<Wallet> => {
  const { rows } = await pool.query(queries.CREATE_WALLET, [wallet.user_id, wallet.balance, wallet.currency])
  return rows[0]
}

export const getWalletByUserId = async (userId: number): Promise<Wallet | null> => {
  const { rows } = await pool.query(queries.GET_WALLET_BY_USER_ID, [userId])
  return rows[0] || null
}

export const updateWalletBalance = async (walletId: number, balance: number): Promise<Wallet | null> => {
  const { rows } = await pool.query(queries.UPDATE_WALLET_BALANCE, [walletId, balance])
  return rows[0] || null
}

export const deleteWallet = async (id: number): Promise<boolean> => {
  const result = await pool.query(queries.DELETE_WALLET, [id])
  return (result.rowCount ?? 0) > 0
}

