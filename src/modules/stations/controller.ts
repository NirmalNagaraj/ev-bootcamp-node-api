import type { Request, Response } from "express"
import * as helper from "./helper"
import { validateStation } from "./validation"

export const createStation = async (req: Request, res: Response) => {
  const errors = validateStation(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  try {
    const station = await helper.createStation(req.body)
    res.status(201).json(station)
  } catch (error) {
    res.status(500).json({ error: "Failed to create station" })
  }
}

export const getAllStations = async (req: Request, res: Response) => {
  try {
    const stations = await helper.getAllStations()
    res.json(stations)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stations" })
  }
}

export const getStationById = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  try {
    const station = await helper.getStationById(id)
    if (station) {
      res.json(station)
    } else {
      res.status(404).json({ error: "Station not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch station" })
  }
}

export const updateStation = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  const errors = validateStation(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  try {
    const updatedStation = await helper.updateStation(id, req.body)
    if (updatedStation) {
      res.json(updatedStation)
    } else {
      res.status(404).json({ error: "Station not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update station" })
  }
}

export const deleteStation = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  try {
    const deleted = await helper.deleteStation(id)
    if (deleted) {
      res.status(204).send()
    } else {
      res.status(404).json({ error: "Station not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete station" })
  }
}

