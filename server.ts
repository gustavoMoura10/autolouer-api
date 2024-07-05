import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import router from "./src/routes";
import errorMiddleware from "./src/middlewares/errorMiddleware";
import AppDataSource from "./src/database/DataSource";
const app: Express = express();
const port = process.env.PORT || 3000;
(async () => {
  try {
    const resultDataSource = await AppDataSource.initialize();
    if (resultDataSource.isInitialized) {
      console.log(`[database]: CONNECTED`);
    }else{
      
    }
    app.use(express.json());
    app.get("/", (req: Request, res: Response) => {
      res.send("Express + TypeScript Server");
    });
    router(app);
    app.use(errorMiddleware);
  } catch (error: any) {
    app.use((req: Request, res: Response) => {
      res.status(500).send(error.message);
    });
  }
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
})();
