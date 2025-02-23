export const CREATE_WALLET = `
  INSERT INTO wallets (user_id, balance, currency)
  VALUES ($1, $2, $3)
  RETURNING *
`

export const GET_WALLET_BY_USER_ID = `
  SELECT * FROM wallets WHERE user_id = $1
`

export const UPDATE_WALLET_BALANCE = `
  UPDATE wallets
  SET balance = $2
  WHERE wallet_id = $1
  RETURNING *
`

export const DELETE_WALLET = `
  DELETE FROM wallets WHERE wallet_id = $1
`

