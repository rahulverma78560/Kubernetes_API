import { Request, Response } from "express";
import { createHpa, deleteHpa, getHpa } from "../manager/hpaManager";
import { createResponses } from "../utility/createResponse";

export const getHpaHandler = async (req: Request, res: Response) => {
  getHpa()
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};

export const creatreHpaHandler = async (req: Request, res: Response) => {
  createHpa().then(
    (successMessage) => {
      return res.status(201).json(createResponses(201, successMessage));
    },
    (err) => {
      return res.status(400).json(createResponses(400, null, err));
    }
  );
};

export const deleteHpaHandler = async (req: Request, res: Response) => {
  deleteHpa()
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};
