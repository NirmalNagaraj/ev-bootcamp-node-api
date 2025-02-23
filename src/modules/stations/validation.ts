import type { Station } from "./types"

export const validateStation = (station: Partial<Station>): string[] => {
  const errors: string[] = []

  if (!station.location) errors.push("Location is required")
  if (typeof station.latitude !== "number") errors.push("Latitude must be a number")
  if (typeof station.longitude !== "number") errors.push("Longitude must be a number")

  return errors
}

