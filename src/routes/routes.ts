import express from "express";
import {
  createNamespaceHandler,
  deleteNamespaceHandler,
  getNamespaceHandler,
} from "../controller/nameSpaceController";
import {
  creatrePodsHandler,
  deletePodHandler,
  getPodsHandler,
} from "../controller/podsController";
import {
  createServiceHandler,
  getServicesHandler,
} from "../controller/serviceController";

const routerMiddleware = express.Router();

routerMiddleware.get("/getPods", getPodsHandler);
routerMiddleware.get("/getNamespace", getNamespaceHandler);
routerMiddleware.get("/getServices", getServicesHandler);
routerMiddleware.post("/createNamespace", createNamespaceHandler);
routerMiddleware.post("/createPod", creatrePodsHandler);
routerMiddleware.post("/createService", createServiceHandler);
routerMiddleware.delete("/deleteNamespace", deleteNamespaceHandler);
routerMiddleware.delete("/deletePod", deletePodHandler);

export default routerMiddleware;
