import express, { Application, Request, Response } from "express";
import cors from "cors";
import Database from "./config/database";
import SportsRoutes from "./router/SportsRoutes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );
  }

  protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Ok");
    });
    this.app.use("/api/v1/sports", SportsRoutes);
  }
}

const port: number = 3000;
const app = new App().app;

app.listen(port, () => {
  console.log(`Server started successfully on port ${port}!`);
});
