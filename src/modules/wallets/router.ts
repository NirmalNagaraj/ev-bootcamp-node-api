import express from "express"
import * as controller from "./controller"

const router = express.Router()

/**
 * @swagger
 * /wallets:
 *   post:
 *     summary: Create a new wallet
 *     tags: [Wallets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WalletInput'
 *     responses:
 *       201:
 *         description: The created wallet
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wallet'
 */
router.post("/", controller.createWallet)

/**
 * @swagger
 * /wallets/user/{userId}:
 *   get:
 *     summary: Get wallet by user ID
 *     tags: [Wallets]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The wallet
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wallet'
 *       404:
 *         description: Wallet not found
 */
router.get("/user/:userId", controller.getWalletByUserId)

/**
 * @swagger
 * /wallets/{walletId}:
 *   put:
 *     summary: Update wallet balance
 *     tags: [Wallets]
 *     parameters:
 *       - in: path
 *         name: walletId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WalletUpdate'
 *     responses:
 *       200:
 *         description: The updated wallet
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wallet'
 *       404:
 *         description: Wallet not found
 */
router.put("/:walletId", controller.updateWalletBalance)

/**
 * @swagger
 * components:
 *   schemas:
 *     WalletInput:
 *       type: object
 *       required:
 *         - user_id
 *         - balance
 *         - currency
 *       properties:
 *         user_id:
 *           type: integer
 *         balance:
 *           type: number
 *         currency:
 *           type: string
 *     WalletUpdate:
 *       type: object
 *       required:
 *         - balance
 *       properties:
 *         balance:
 *           type: number
 *     Wallet:
 *       type: object
 *       properties:
 *         wallet_id:
 *           type: integer
 *         user_id:
 *           type: integer
 *         balance:
 *           type: number
 *         currency:
 *           type: string
 */

export default router

