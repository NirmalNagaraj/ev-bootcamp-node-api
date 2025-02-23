export const CREATE_SESSION = `
  INSERT INTO sessions (
    session_started, charge_point_id, user_id, connector_id, 
    start_meter_value, currency, tariff_id
  ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
`

export const GET_SESSION_BY_ID = `
  SELECT * FROM sessions WHERE transaction_id = $1
`

export const GET_SESSIONS_BY_USER = `
  SELECT * FROM sessions WHERE user_id = $1 ORDER BY session_started DESC
`

export const UPDATE_SESSION = `
  UPDATE sessions SET 
    session_stopped = $2, 
    stop_meter_value = $3, 
    bill_amount = $4, 
    is_completed = $5
  WHERE transaction_id = $1 RETURNING *
`

export const GET_CHARGING_STATS = `
  SELECT 
    charge_point_id, 
    COUNT(*) as total_sessions, 
    SUM(stop_meter_value - start_meter_value) as total_energy_consumed
  FROM sessions
  WHERE is_completed = true
  GROUP BY charge_point_id
`

