import swaggerJsdoc from "swagger-jsdoc"
import dotenv from 'dotenv'

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node TS Bootcamp API",
      version: "1.0.0",
      description: "API created for practising node ts postgres",
    },
    servers: [
      {
        url: `${process.env.URL_HOST}/api`,
        description: "Development server",
      },
    ],
  },
  apis: ["./src/modules/*/router.ts"],
}

export const specs = swaggerJsdoc(options)

