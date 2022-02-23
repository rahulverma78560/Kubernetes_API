import { createResponse } from "../model/responseModel";

export const createResponses = (
  code: number,
  data?: any,
  err?: string
): createResponse => {
  return {
    code: code,
    data: data,
    errormessage: err,
  };
};
