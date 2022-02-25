import express from "express";
import {
  creatreDeploymentHandler,
  deleteDeploymentsHandler,
  getDeploymentsHandler,
  updateDeploymentHandler,
} from "../controller/deploymentController";
import { getLogssHandler } from "../controller/logController";
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
  deleteServiceHandler,
  getServicesHandler,
} from "../controller/serviceController";

const routerMiddleware = express.Router();

routerMiddleware.get("/getPods", getPodsHandler);
routerMiddleware.get("/getLogs", getLogssHandler);
routerMiddleware.get("/getDeployment", getDeploymentsHandler);
routerMiddleware.get("/getNamespace", getNamespaceHandler);
routerMiddleware.get("/getServices", getServicesHandler);
routerMiddleware.post("/createNamespace", createNamespaceHandler);
routerMiddleware.post("/createPod", creatrePodsHandler);
routerMiddleware.post("/createService", createServiceHandler);
routerMiddleware.post("/createDeployment", creatreDeploymentHandler);
routerMiddleware.put("/updateDeployment", updateDeploymentHandler);
routerMiddleware.delete("/deleteNamespace", deleteNamespaceHandler);
routerMiddleware.delete("/deletePod", deletePodHandler);
routerMiddleware.delete("/deleteService", deleteServiceHandler);
routerMiddleware.delete("/deleteDeployment", deleteDeploymentsHandler);

export default routerMiddleware;
