import type { Request, Response } from "express"
import * as helper from "./helper"

export const createSession = async (req: Request, res: Response) => {
  try {
    const session = await helper.createSession(req.body)
    res.status(201).json(session)
  } catch (error) {
    res.status(500).json({ error: "Failed to create session" })
  }
}

export const getSessionById = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  try {
    const session = await helper.getSessionById(id)
    if (session) {
      res.json(session)
    } else {
      res.status(404).json({ error: "Session not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch session" })
  }
}

export const getSessionsByUser = async (req: Request, res: Response) => {
  const userId = Number.parseInt(req.params.userId)
  try {
    const sessions = await helper.getSessionsByUser(userId)
    res.json(sessions)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sessions" })
  }
}

export const updateSession = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  try {
    const updatedSession = await helper.updateSession(id, req.body)
    if (updatedSession) {
      res.json(updatedSession)
    } else {
      res.status(404).json({ error: "Session not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update session" })
  }
}

export const getChargingStats = async (req: Request, res: Response) => {
  try {
    const stats = await helper.getChargingStats()
    res.json(stats)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch charging stats" })
  }
}

