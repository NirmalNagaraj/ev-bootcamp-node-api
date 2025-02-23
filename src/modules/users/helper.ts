import pool from "../../config/database"
import type { User } from "./types"
import * as queries from "./queries"

export const createUser = async (user: Omit<User, "user_id" | "created_at">): Promise<User> => {
  const { rows } = await pool.query(queries.CREATE_USER, [
    user.full_name,
    user.email,
    user.phone,
    user.rfid_tag,
    user.car_brand,
    user.car_model,
  ])
  return rows[0]
}

export const getAllUsers = async (): Promise<User[]> => {
  const { rows } = await pool.query(queries.GET_ALL_USERS)
  return rows
}

export const getUserById = async (id: number): Promise<User | null> => {
  const { rows } = await pool.query(queries.GET_USER_BY_ID, [id])
  return rows[0] || null
}

export const updateUser = async (id: number, user: Partial<User>): Promise<User | null> => {
  const { rows } = await pool.query(queries.UPDATE_USER, [
    id,
    user.full_name,
    user.email,
    user.phone,
    user.rfid_tag,
    user.car_brand,
    user.car_model,
  ])
  return rows[0] || null
}

export const deleteUser = async (id: number): Promise<boolean> => {
  const result = await pool.query(queries.DELETE_USER, [id])
  return (result.rowCount ?? 0) > 0
}

