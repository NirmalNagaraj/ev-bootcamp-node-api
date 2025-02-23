import pool from "../../config/database"
import type { Station } from "./types"
import * as queries from "./queries"

export const createStation = async (station: Omit<Station, "station_id">): Promise<Station> => {
  const { rows } = await pool.query(queries.CREATE_STATION, [
    station.location,
    station.operator_name,
    station.latitude,
    station.longitude,
    station.total_connectors,
    station.is_24_7,
  ])
  return rows[0]
}

export const getAllStations = async (): Promise<Station[]> => {
  const { rows } = await pool.query(queries.GET_ALL_STATIONS)
  return rows
}

export const getStationById = async (id: number): Promise<Station | null> => {
  const { rows } = await pool.query(queries.GET_STATION_BY_ID, [id])
  return rows[0] || null
}

export const updateStation = async (id: number, station: Partial<Station>): Promise<Station | null> => {
  const { rows } = await pool.query(queries.UPDATE_STATION, [
    id,
    station.location,
    station.operator_name,
    station.latitude,
    station.longitude,
    station.total_connectors,
    station.is_24_7,
  ])
  return rows[0] || null
}

export const deleteStation = async (id: number): Promise<boolean> => {
  const result = await pool.query(queries.DELETE_STATION, [id])
  return result.rowCount !== null && result.rowCount > 0
}

