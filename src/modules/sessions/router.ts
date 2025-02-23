import express from "express"
import * as controller from "./controller"

const router = express.Router()

/**
 * @swagger
 * /sessions:
 *   post:
 *     summary: Create a new charging session
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SessionInput'
 *     responses:
 *       201:
 *         description: The created session
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Session'
 */
router.post("/", controller.createSession)

/**
 * @swagger
 * /sessions/{id}:
 *   get:
 *     summary: Get a session by ID
 *     tags: [Sessions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The session
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Session'
 *       404:
 *         description: Session not found
 */
router.get("/:id", controller.getSessionById)

/**
 * @swagger
 * /sessions/user/{userId}:
 *   get:
 *     summary: Get sessions by user ID
 *     tags: [Sessions]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of sessions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Session'
 */
router.get("/user/:userId", controller.getSessionsByUser)

/**
 * @swagger
 * /sessions/{id}:
 *   put:
 *     summary: Update a session (stop charging)
 *     tags: [Sessions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SessionUpdate'
 *     responses:
 *       200:
 *         description: The updated session
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Session'
 *       404:
 *         description: Session not found
 */
router.put("/:id", controller.updateSession)

/**
 * @swagger
 * /sessions/stats:
 *   get:
 *     summary: Get charging statistics
 *     tags: [Sessions]
 *     responses:
 *       200:
 *         description: Charging statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   charge_point_id:
 *                     type: integer
 *                   total_sessions:
 *                     type: integer
 *                   total_energy_consumed:
 *                     type: number
 */
router.get("/stats", controller.getChargingStats)

/**
 * @swagger
 * components:
 *   schemas:
 *     SessionInput:
 *       type: object
 *       required:
 *         - session_started
 *         - charge_point_id
 *         - user_id
 *         - connector_id
 *         - start_meter_value
 *         - currency
 *         - tariff_id
 *       properties:
 *         session_started:
 *           type: string
 *           format: date-time
 *         charge_point_id:
 *           type: integer
 *         user_id:
 *           type: integer
 *         connector_id:
 *           type: integer
 *         start_meter_value:
 *           type: number
 *         currency:
 *           type: string
 *         tariff_id:
 *           type: integer
 *     SessionUpdate:
 *       type: object
 *       required:
 *         - session_stopped
 *         - stop_meter_value
 *         - bill_amount
 *         - is_completed
 *       properties:
 *         session_stopped:
 *           type: string
 *           format: date-time
 *         stop_meter_value:
 *           type: number
 *         bill_amount:
 *           type: number
 *         is_completed:
 *           type: boolean
 *     Session:
 *       type: object
 *       properties:
 *         transaction_id:
 *           type: integer
 *         session_started:
 *           type: string
 *           format: date-time
 *         session_stopped:
 *           type: string
 *           format: date-time
 *         charge_point_id:
 *           type: integer
 *         user_id:
 *           type: integer
 *         connector_id:
 *           type: integer
 *         start_meter_value:
 *           type: number
 *         stop_meter_value:
 *           type: number
 *         bill_amount:
 *           type: number
 *         currency:
 *           type: string
 *         is_completed:
 *           type: boolean
 *         tariff_id:
 *           type: integer
 */

export default router

