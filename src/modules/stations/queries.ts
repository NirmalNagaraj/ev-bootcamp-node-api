export const CREATE_STATION = `
  INSERT INTO stations (location, operator_name, latitude, longitude, total_connectors, is_24_7)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *
`

export const GET_ALL_STATIONS = `
  SELECT * FROM stations
`

export const GET_STATION_BY_ID = `
  SELECT * FROM stations WHERE station_id = $1
`

export const UPDATE_STATION = `
  UPDATE stations
  SET location = $2, operator_name = $3, latitude = $4, longitude = $5, total_connectors = $6, is_24_7 = $7
  WHERE station_id = $1
  RETURNING *
`

export const DELETE_STATION = `
  DELETE FROM stations WHERE station_id = $1
`

