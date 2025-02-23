import pool from "../../config/database"
import type { Connector } from "./types"
import * as queries from "./queries"

export const createConnector = async (connector: Omit<Connector, "connector_id">): Promise<Connector> => {
  const { rows } = await pool.query(queries.CREATE_CONNECTOR, [
    connector.charge_point_id,
    connector.capacity,
    connector.type,
    connector.status,
  ])
  return rows[0]
}

export const getConnectorById = async (id: number): Promise<Connector | null> => {
  const { rows } = await pool.query(queries.GET_CONNECTOR_BY_ID, [id])
  return rows[0] || null
}

export const getConnectorsByChargePoint = async (chargePointId: number): Promise<Connector[]> => {
  const { rows } = await pool.query(queries.GET_CONNECTORS_BY_CHARGE_POINT, [chargePointId])
  return rows
}

export const updateConnector = async (id: number, connector: Partial<Connector>): Promise<Connector | null> => {
  const { rows } = await pool.query(queries.UPDATE_CONNECTOR, [
    id,
    connector.charge_point_id,
    connector.capacity,
    connector.type,
    connector.status,
  ])
  return rows[0] || null
}

export const deleteConnector = async (id: number): Promise<boolean> => {
  const result = await pool.query(queries.DELETE_CONNECTOR, [id])
  return result.rowCount !== null && result.rowCount > 0
}

