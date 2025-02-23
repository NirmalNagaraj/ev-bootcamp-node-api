import type { Request, Response } from "express"
import * as helper from "./helper"
import { validateChargePoint } from "./validation"

export const createChargePoint = async (req: Request, res: Response) => {
  const errors = validateChargePoint(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  try {
    const chargePoint = await helper.createChargePoint(req.body)
    res.status(201).json(chargePoint)
  } catch (error) {
    res.status(500).json({ error: "Failed to create charge point" })
  }
}

export const getChargePointById = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  try {
    const chargePoint = await helper.getChargePointById(id)
    if (chargePoint) {
      res.json(chargePoint)
    } else {
      res.status(404).json({ error: "Charge point not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch charge point" })
  }
}

export const getChargePointsByStation = async (req: Request, res: Response) => {
  const stationId = Number.parseInt(req.params.stationId)
  try {
    const chargePoints = await helper.getChargePointsByStation(stationId)
    res.json(chargePoints)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch charge points" })
  }
}

export const updateChargePoint = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  const errors = validateChargePoint(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  try {
    const updatedChargePoint = await helper.updateChargePoint(id, req.body)
    if (updatedChargePoint) {
      res.json(updatedChargePoint)
    } else {
      res.status(404).json({ error: "Charge point not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update charge point" })
  }
}

export const deleteChargePoint = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  try {
    const deleted = await helper.deleteChargePoint(id)
    if (deleted) {
      res.status(204).send()
    } else {
      res.status(404).json({ error: "Charge point not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete charge point" })
  }
}

