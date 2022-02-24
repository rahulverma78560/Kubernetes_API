import { Request, Response } from "express";
import { getLogs } from "../manager/logsManager";
import { createResponses } from "../utility/createResponse";

export const getLogssHandler = async (req: Request, res: Response) => {
  const data = req.body;
  getLogs(data.nameSpace, data.podName)
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};
