import express from 'express';
import { AppRouter } from './AppRouter/AppRouter';

export class Application {
  private app: express.Application;
  constructor() {
    this.app = express();
  }

  use(path: string, router: AppRouter) {
    this.app.use(path, router.getNativeRouter());
  }

  listen(port: string | number, cb: () => void): void {
    this.app.listen(port, cb);
  }
}
