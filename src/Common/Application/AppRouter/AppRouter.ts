import { Router } from 'express';
import { logInfo } from '../../../utils/logger';
import {
  AppRoute,
  AppRouterConstructorOptions,
  RouteMethods,
} from './AppRouter.types';

export class AppRouter {
  private router: Router;

  constructor(options: AppRouterConstructorOptions) {
    this.router = Router();

    options.routes.forEach((route) => {
      this.registerRoute(route);
    });
  }

  getRouter() {
    return this.router;
  }

  registerRoute(route: AppRoute) {
    switch (route.method) {
      case RouteMethods.GET:
        this.router.get(route.path, route.handler);

        break;

      // TODO:TUCKER - Add More of these here

      default:
        logInfo('Unable To Determine Method');
        break;
    }
  }
}
