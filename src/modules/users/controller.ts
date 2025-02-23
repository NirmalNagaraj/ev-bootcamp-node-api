import type { Request, Response } from "express"
import * as helper from "./helper"
import { validateUser } from "./validation"

export const createUser = async (req: Request, res: Response) => {
  const errors = validateUser(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  try {
    const user = await helper.createUser(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" })
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await helper.getAllUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" })
  }
}

export const getUserById = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  try {
    const user = await helper.getUserById(id)
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ error: "User not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  const errors = validateUser(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  try {
    const updatedUser = await helper.updateUser(id, req.body)
    if (updatedUser) {
      res.json(updatedUser)
    } else {
      res.status(404).json({ error: "User not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  try {
    const deleted = await helper.deleteUser(id)
    if (deleted) {
      res.status(204).send()
    } else {
      res.status(404).json({ error: "User not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" })
  }
}

