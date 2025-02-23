export const CREATE_CONNECTOR = `
  INSERT INTO charge_connectors (charge_point_id, capacity, type, status)
  VALUES ($1, $2, $3, $4)
  RETURNING *
`

export const GET_CONNECTOR_BY_ID = `
  SELECT * FROM charge_connectors WHERE connector_id = $1
`

export const GET_CONNECTORS_BY_CHARGE_POINT = `
  SELECT * FROM charge_connectors WHERE charge_point_id = $1
`

export const UPDATE_CONNECTOR = `
  UPDATE charge_connectors
  SET charge_point_id = $2, capacity = $3, type = $4, status = $5
  WHERE connector_id = $1
  RETURNING *
`

export const DELETE_CONNECTOR = `
  DELETE FROM charge_connectors WHERE connector_id = $1
`

