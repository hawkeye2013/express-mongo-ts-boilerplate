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

  getNativeRouter() {
    return this.router;
  }

  registerRoute(route: AppRoute) {
    switch (route.method) {
      case RouteMethods.GET:
        this.router.get(route.path, route.handler);

        break;

      case RouteMethods.POST:
        this.router.post(route.path, route.handler);

        break;

      case RouteMethods.PUT:
        this.router.put(route.path, route.handler);

        break;

      case RouteMethods.DELETE:
        this.router.delete(route.path, route.handler);

        break;

      default:
        logInfo('Unable To Determine Method');
        break;
    }
  }
}
