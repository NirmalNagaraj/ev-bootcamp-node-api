import type { Connector } from "./types"

export const validateConnector = (connector: Partial<Connector>): string[] => {
  const errors: string[] = []

  if (typeof connector.charge_point_id !== "number") errors.push("Charge point ID is required and must be a number")
  if (typeof connector.capacity !== "number") errors.push("Capacity is required and must be a number")
  if (!connector.type || !["AC", "DC"].includes(connector.type)) errors.push("Type must be either AC or DC")
  if (!connector.status || !["Active", "Faulty", "Occupied"].includes(connector.status))
    errors.push("Status must be Active, Faulty, or Occupied")

  return errors
}

