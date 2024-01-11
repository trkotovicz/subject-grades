import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { errorCatalog, ErrorTypes } from '../errors/catalog';

interface ExtendedError extends Error {
  code?: string;
}

enum errorsDB {
  duplicateKey = '23505'
}

const errorHandler: ErrorRequestHandler = (err: ExtendedError, _req, res, _next) => {

  if (err.code === errorsDB.duplicateKey) {
    const { httpStatus, message } = errorCatalog[ErrorTypes.ConflictError];
    return res.status(httpStatus).json({ error: message });
  }

  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ error: message });
  }

  else if (err.message) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
  }

  console.error(err);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'internal error' });
};

export default errorHandler;
