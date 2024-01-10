import { StatusCodes } from 'http-status-codes';

export enum ErrorTypes {
  GenericError = 'GenericError',
  BadRequest = 'BadRequest',
  ConflictError = 'ConflictError'
}

interface ErrorResponseObject {
  message: string;
  httpStatus: number;
}

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject;
};

export const errorCatalog: ErrorCatalog = {
  GenericError: {
    message: 'Internal error',
    httpStatus: StatusCodes.INTERNAL_SERVER_ERROR,
  },
  BadRequest: {
    message: 'Something wrong happened',
    httpStatus: StatusCodes.BAD_REQUEST,
  },
  ConflictError: {
    message: 'It seems that this subject is already created for the selected period',
    httpStatus: StatusCodes.CONFLICT,
  }
};
