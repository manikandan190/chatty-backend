import express, { Express } from "express";
import { ChattyServer } from "./setupServer";
import databaseConnection from "./setupDatabase";
import { config } from "./config";
class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const Server: ChattyServer = new ChattyServer(app);
    Server.start(app);
  }
  private loadConfig(): void {
    config.validateConfig();
  }
}
const application: Application = new Application();

application.initialize();
