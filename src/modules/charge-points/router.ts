import express from "express"
import * as controller from "./controller"

const router = express.Router()

router.post("/", controller.createChargePoint)
router.get("/:id", controller.getChargePointById)
router.get("/station/:stationId", controller.getChargePointsByStation)
router.put("/:id", controller.updateChargePoint)
router.delete("/:id", controller.deleteChargePoint)

export default router

