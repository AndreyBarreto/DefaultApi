import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export default (error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction) => {
    console.log(error)
    response.sendStatus(500)
}