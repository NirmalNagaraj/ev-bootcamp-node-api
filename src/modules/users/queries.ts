export const CREATE_USER = `
  INSERT INTO users (full_name, email, phone, rfid_tag, car_brand, car_model)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *
`

export const GET_ALL_USERS = `
  SELECT * FROM users
`

export const GET_USER_BY_ID = `
  SELECT * FROM users WHERE user_id = $1
`

export const UPDATE_USER = `
  UPDATE users
  SET full_name = $2, email = $3, phone = $4, rfid_tag = $5, car_brand = $6, car_model = $7
  WHERE user_id = $1
  RETURNING *
`

export const DELETE_USER = `
  DELETE FROM users WHERE user_id = $1
`

