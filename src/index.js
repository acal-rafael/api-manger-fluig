import express from 'express';
import cors from 'cors';
import { routes } from './routes/index.js';
import { conn } from '../config/sequelize.js';
import { setup } from '../config/setup.js';
import swaggerUi from 'swagger-ui-express'; 
import swaggerDocument from "../config/swagger.json" assert { type: "json" };

export const App = async () => {
  const { port } = setup.api;
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(routes());

  try {
    await conn.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  app.listen(port, () => console.log(`API server running on port: ${port}`));

  return app;
}

