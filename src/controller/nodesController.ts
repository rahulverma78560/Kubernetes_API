import { Request, Response } from "express";
import { createNodes, deleteNodes, getNodes } from "../manager/nodesManager";
import { createResponses } from "../utility/createResponse";

export const getNodesHandler = async (req: Request, res: Response) => {
  getNodes()
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};

export const creatreNodesHandler = async (req: Request, res: Response) => {
  createNodes().then(
    (successMessage) => {
      return res.status(201).json(createResponses(201, successMessage));
    },
    (err) => {
      return res.status(400).json(createResponses(400, null, err));
    }
  );
};

export const deleteNodesHandler = async (req: Request, res: Response) => {
  deleteNodes()
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};
