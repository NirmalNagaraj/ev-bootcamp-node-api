export const CREATE_CHARGE_POINT = `
  INSERT INTO charge_points (station_id, max_output, is_active)
  VALUES ($1, $2, $3)
  RETURNING *
`

export const GET_CHARGE_POINT_BY_ID = `
  SELECT * FROM charge_points WHERE charge_point_id = $1
`

export const GET_CHARGE_POINTS_BY_STATION = `
  SELECT * FROM charge_points WHERE station_id = $1
`

export const UPDATE_CHARGE_POINT = `
  UPDATE charge_points
  SET station_id = $2, max_output = $3, is_active = $4
  WHERE charge_point_id = $1
  RETURNING *
`

export const DELETE_CHARGE_POINT = `
  DELETE FROM charge_points WHERE charge_point_id = $1
`

