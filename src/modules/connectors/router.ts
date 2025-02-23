import express from "express"
import * as controller from "./controller"

const router = express.Router()

router.post("/", controller.createConnector)
router.get("/:id", controller.getConnectorById)
router.get("/charge-point/:chargePointId", controller.getConnectorsByChargePoint)
router.put("/:id", controller.updateConnector)
router.delete("/:id", controller.deleteConnector)

export default router

