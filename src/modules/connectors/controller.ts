import type { Request, Response } from "express"
import * as helper from "./helper"
import { validateConnector } from "./validation"

export const createConnector = async (req: Request, res: Response) => {
  const errors = validateConnector(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  try {
    const connector = await helper.createConnector(req.body)
    res.status(201).json(connector)
  } catch (error) {
    res.status(500).json({ error: "Failed to create connector" })
  }
}

export const getConnectorById = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  try {
    const connector = await helper.getConnectorById(id)
    if (connector) {
      res.json(connector)
    } else {
      res.status(404).json({ error: "Connector not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch connector" })
  }
}

export const getConnectorsByChargePoint = async (req: Request, res: Response) => {
  const chargePointId = Number.parseInt(req.params.chargePointId)
  try {
    const connectors = await helper.getConnectorsByChargePoint(chargePointId)
    res.json(connectors)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch connectors" })
  }
}

export const updateConnector = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  const errors = validateConnector(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  try {
    const updatedConnector = await helper.updateConnector(id, req.body)
    if (updatedConnector) {
      res.json(updatedConnector)
    } else {
      res.status(404).json({ error: "Connector not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update connector" })
  }
}

export const deleteConnector = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  try {
    const deleted = await helper.deleteConnector(id)
    if (deleted) {
      res.status(204).send()
    } else {
      res.status(404).json({ error: "Connector not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete connector" })
  }
}

