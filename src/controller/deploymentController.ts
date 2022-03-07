import { Request, Response } from "express";
import {
  createDeployment,
  deleteDeployment,
  getDeployment,
  updateDeployment,
} from "../manager/deploymentManager";
import { createResponses } from "../utility/createResponse";

export const getDeploymentsHandler = async (req: Request, res: Response) => {
  getDeployment()
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};

export const creatreDeploymentHandler = async (req: Request, res: Response) => {
  const podDetails = req.body;
  createDeployment(podDetails.deployName).then(
    (successMessage) => {
      return res.status(201).json(createResponses(201, successMessage));
    },
    (err) => {
      return res.status(400).json(createResponses(400, null, err));
    }
  );
};

export const updateDeploymentHandler = async (req: Request, res: Response) => {
  const podDetails = req.body;
  updateDeployment(podDetails.name, podDetails.nameSpace, podDetails.data).then(
    (successMessage) => {
      return res.status(201).json(createResponses(201, successMessage));
    },
    (err) => {
      return res.status(400).json(createResponses(400, null, err));
    }
  );
};

export const deleteDeploymentsHandler = async (req: Request, res: Response) => {
  const DeployDetails = req.body;
  deleteDeployment(DeployDetails.deployName, DeployDetails.nameSpace)
    .then((data: any) => {
      return res.status(200).json(createResponses(200, data));
    })
    .catch((err) => {
      return res.status(404).json(createResponses(404, err));
    });
};
