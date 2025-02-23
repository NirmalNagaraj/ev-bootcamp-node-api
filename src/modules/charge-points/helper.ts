import pool from "../../config/database"
import type { ChargePoint } from "./types"
import * as queries from "./queries"

export const createChargePoint = async (chargePoint: Omit<ChargePoint, "charge_point_id">): Promise<ChargePoint> => {
  const { rows } = await pool.query(queries.CREATE_CHARGE_POINT, [
    chargePoint.station_id,
    chargePoint.max_output,
    chargePoint.is_active,
  ])
  return rows[0]
}

export const getChargePointById = async (id: number): Promise<ChargePoint | null> => {
  const { rows } = await pool.query(queries.GET_CHARGE_POINT_BY_ID, [id])
  return rows[0] || null
}

export const getChargePointsByStation = async (stationId: number): Promise<ChargePoint[]> => {
  const { rows } = await pool.query(queries.GET_CHARGE_POINTS_BY_STATION, [stationId])
  return rows
}

export const updateChargePoint = async (id: number, chargePoint: Partial<ChargePoint>): Promise<ChargePoint | null> => {
  const { rows } = await pool.query(queries.UPDATE_CHARGE_POINT, [
    id,
    chargePoint.station_id,
    chargePoint.max_output,
    chargePoint.is_active,
  ])
  return rows[0] || null
}

export const deleteChargePoint = async (id: number): Promise<boolean> => {
  const result = await pool.query(queries.DELETE_CHARGE_POINT, [id])
  return result.rowCount ? result.rowCount > 0 : false
}

