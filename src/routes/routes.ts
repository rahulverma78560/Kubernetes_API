import express from "express";
import {
  createNamespaceHandler,
  deleteNamespaceHandler,
  getNamespaceHandler,
} from "../controller/nameSpaceController";
import { getPodsHandler } from "../controller/podsController";
import { getServicesHandler } from "../controller/serviceController";

const routerMiddleware = express.Router();

routerMiddleware.get("/getPods", getPodsHandler);
routerMiddleware.get("/getServices", getServicesHandler);
routerMiddleware.post("/createNamespace", createNamespaceHandler);
routerMiddleware.get("/getNamespace", getNamespaceHandler);
routerMiddleware.delete("/deleteNamespace", deleteNamespaceHandler);

export default routerMiddleware;
