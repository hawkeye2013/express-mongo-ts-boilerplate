import * as express from 'express';
import { AppRouter } from './AppRouter';

export enum RouteMethods {
  'GET',
  'POST',
  'PUT',
  'DELETE',
}

export type AppRoute = {
  method: RouteMethods;
  path: string;
  roles: string[];
  handler: (
    req: express.Request,
    res: express.Response,
    next?: express.NextFunction,
  ) => void;
};

export type AppRouterConstructorOptions = {
  routes: AppRoute[];
};
