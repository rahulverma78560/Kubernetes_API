import { Request, Response } from "express";
import { createPod, deletePod, getPods } from "../manager/podsManager";
import { createResponses } from "../utility/createResponse";

export const getPodsHandler = async (req: Request, res: Response) => {
  getPods()
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};

export const creatrePodsHandler = async (req: Request, res: Response) => {
  const podDetails = req.body;
  createPod(podDetails.name, podDetails.app).then(
    (successMessage) => {
      return res.status(201).json(createResponses(201, successMessage));
    },
    (err) => {
      return res.status(400).json(createResponses(400, null, err));
    }
  );
};

export const deletePodHandler = async (req: Request, res: Response) => {
  const podDetails = req.body;
  deletePod(podDetails.name, podDetails.nameSpace)
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};
