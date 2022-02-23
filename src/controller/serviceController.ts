import { Request, Response } from "express";
import { getServices } from "../manager/serviceManager";
import { createResponses } from "../utility/createResponse";

export const getServicesHandler = async (req: Request, res: Response) => {
  getServices()
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};
