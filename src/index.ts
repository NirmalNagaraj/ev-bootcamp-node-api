import express from "express"
import dotenv from "dotenv"
import swaggerUi from "swagger-ui-express"
import routes from "./routes"
import { errorHandler } from "./utils/errorHandler"
import { specs } from "./swagger"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use("/api", routes)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

