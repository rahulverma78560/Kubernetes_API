import express from "express";
import {
  createNamespaceHandler,
  deleteNamespaceHandler,
  getNamespaceHandler,
} from "../controller/nameSpaceController";
import { getCategoryHandler } from "../controller/podsController";

const routerMiddleware = express.Router();

routerMiddleware.get("/getPods", getCategoryHandler);
routerMiddleware.post("/createNamespace", createNamespaceHandler);
routerMiddleware.get("/getNamespace", getNamespaceHandler);
routerMiddleware.delete("/deleteNamespace", deleteNamespaceHandler);

export default routerMiddleware;
