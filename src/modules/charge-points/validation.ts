import type { ChargePoint } from "./types"

export const validateChargePoint = (chargePoint: Partial<ChargePoint>): string[] => {
  const errors: string[] = []

  if (typeof chargePoint.station_id !== "number") errors.push("Station ID is required and must be a number")
  if (typeof chargePoint.max_output !== "number") errors.push("Max output is required and must be a number")
  if (typeof chargePoint.is_active !== "boolean") errors.push("Is active is required and must be a boolean")

  return errors
}

