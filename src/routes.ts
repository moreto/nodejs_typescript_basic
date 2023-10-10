import { Router } from "express";
import { RootController } from "./controllers/rootControllers";

const router = Router();

const rootController = new RootController();

router.get("", rootController.root);

export { router };
