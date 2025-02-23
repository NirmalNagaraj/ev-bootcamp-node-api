import pool from "../../config/database"
import type { Session } from "./types"
import * as queries from "./queries"

export const createSession = async (
  session: Omit<Session, "transaction_id" | "session_stopped" | "stop_meter_value" | "bill_amount" | "is_completed">,
): Promise<Session> => {
  const { rows } = await pool.query(queries.CREATE_SESSION, [
    session.session_started,
    session.charge_point_id,
    session.user_id,
    session.connector_id,
    session.start_meter_value,
    session.currency,
    session.tariff_id,
  ])
  return rows[0]
}

export const getSessionById = async (id: number): Promise<Session | null> => {
  const { rows } = await pool.query(queries.GET_SESSION_BY_ID, [id])
  return rows[0] || null
}

export const getSessionsByUser = async (userId: number): Promise<Session[]> => {
  const { rows } = await pool.query(queries.GET_SESSIONS_BY_USER, [userId])
  return rows
}

export const updateSession = async (id: number, session: Partial<Session>): Promise<Session | null> => {
  const { rows } = await pool.query(queries.UPDATE_SESSION, [
    id,
    session.session_stopped,
    session.stop_meter_value,
    session.bill_amount,
    session.is_completed,
  ])
  return rows[0] || null
}

export const getChargingStats = async (): Promise<
  { charge_point_id: number; total_sessions: number; total_energy_consumed: number }[]
> => {
  const { rows } = await pool.query(queries.GET_CHARGING_STATS)
  return rows
}

