import type { Request, Response } from "express"
import * as helper from "./helper"
import { validateWallet } from "./validation"

export const createWallet = async (req: Request, res: Response) => {
  const errors = validateWallet(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  try {
    const wallet = await helper.createWallet(req.body)
    res.status(201).json(wallet)
  } catch (error) {
    res.status(500).json({ error: "Failed to create wallet" })
  }
}

export const getWalletByUserId = async (req: Request, res: Response) => {
  const userId = Number.parseInt(req.params.userId)
  try {
    const wallet = await helper.getWalletByUserId(userId)
    if (wallet) {
      res.json(wallet)
    } else {
      res.status(404).json({ error: "Wallet not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch wallet" })
  }
}

export const updateWalletBalance = async (req: Request, res: Response) => {
  const walletId = Number.parseInt(req.params.walletId)
  const { balance } = req.body

  if (typeof balance !== "number") {
    return res.status(400).json({ error: "Balance must be a number" })
  }

  try {
    const updatedWallet = await helper.updateWalletBalance(walletId, balance)
    if (updatedWallet) {
      res.json(updatedWallet)
    } else {
      res.status(404).json({ error: "Wallet not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update wallet balance" })
  }
}

export const deleteWallet = async (req: Request, res: Response) => {
  const walletId = Number.parseInt(req.params.walletId)
  try {
    const deleted = await helper.deleteWallet(walletId)
    if (deleted) {
      res.status(204).send()
    } else {
      res.status(404).json({ error: "Wallet not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete wallet" })
  }
}

