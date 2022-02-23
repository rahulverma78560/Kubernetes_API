import express from "express";
import { getCategoryHandler } from "../controller/podsController";

const routerMiddleware = express.Router();

routerMiddleware.get("/getpods", getCategoryHandler);

export default routerMiddleware;
