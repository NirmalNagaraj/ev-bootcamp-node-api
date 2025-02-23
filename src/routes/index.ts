import express from "express"
import stationsRouter from "../modules/stations/router"
import chargePointsRouter from "../modules/charge-points/router"
import connectorsRouter from "../modules/connectors/router"
import sessionsRouter from "../modules/sessions/router"
import usersRouter from "../modules/users/router"
import walletsRouter from "../modules/wallets/router"

const router = express.Router()

router.use("/stations", stationsRouter)
router.use("/charge-points", chargePointsRouter)
router.use("/connectors", connectorsRouter)
router.use("/sessions", sessionsRouter)
router.use("/users", usersRouter)
router.use("/wallets", walletsRouter)

export default router

