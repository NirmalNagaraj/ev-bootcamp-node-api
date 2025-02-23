import express from "express"
import * as controller from "./controller"

const router = express.Router()

router.post("/", controller.createStation)
router.get("/", controller.getAllStations)
router.get("/:id", controller.getStationById)
router.put("/:id", controller.updateStation)
router.delete("/:id", controller.deleteStation)

export default router

