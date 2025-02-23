import express from "express"
import * as controller from "./controller"

const router = express.Router()

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       201:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post("/", controller.createUser)

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/", controller.getAllUsers)

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get("/:id", controller.getUserById)

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [Users]
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
 *             $ref: '#/components/schemas/UserUpdate'
 *     responses:
 *       200:
 *         description: The updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.put("/:id", controller.updateUser)

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: User not found
 */
router.delete("/:id", controller.deleteUser)

/**
 * @swagger
 * components:
 *   schemas:
 *     UserInput:
 *       type: object
 *       required:
 *         - full_name
 *         - email
 *       properties:
 *         full_name:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         rfid_tag:
 *           type: string
 *         car_brand:
 *           type: string
 *         car_model:
 *           type: string
 *     UserUpdate:
 *       type: object
 *       properties:
 *         full_name:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *     User:
 *       type: object
 *       properties:
 *         user_id:
 *           type: integer
 *         full_name:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         rfid_tag:
 *           type: string
 *         car_brand:
 *           type: string
 *         car_model:
 *           type: string
 *         created_at:
 *           type: string
 *           format: date-time
 */

export default router

