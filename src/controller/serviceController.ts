import { Request, Response } from "express";
import {
  createServiceManager,
  deleteService,
  getServices,
} from "../manager/serviceManager";
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

export const createServiceHandler = async (req: Request, res: Response) => {
  createServiceManager()
    .then((data: any) => {
      return res.status(201).json(createResponses(201, data));
    })
    .catch((err) => {
      return res.status(400).json(createResponses(400, err));
    });
};
export const deleteServiceHandler = async (req: Request, res: Response) => {
  const podDetails = req.body;
  deleteService(podDetails.name, podDetails.nameSpace)
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};
