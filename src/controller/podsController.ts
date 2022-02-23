import { Request, Response } from "express";
import { getPods } from "../manager/podsManager";
import { createResponses } from "../utility/createResponse";

export const getCategoryHandler = async (req: Request, res: Response) => {
  getPods()
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};
