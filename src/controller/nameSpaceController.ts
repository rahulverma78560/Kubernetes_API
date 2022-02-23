import { Request, Response } from "express";
import {
  createNamespaceManager,
  deleteNameSpaces,
  getNameSpaces,
} from "../manager/nameSpaceManager";
import { createResponses } from "../utility/createResponse";

export const createNamespaceHandler = async (req: Request, res: Response) => {
  createNamespaceManager()
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};

export const getNamespaceHandler = async (req: Request, res: Response) => {
  getNameSpaces()
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};
export const deleteNamespaceHandler = async (req: Request, res: Response) => {
  deleteNameSpaces()
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};
