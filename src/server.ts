import express from 'express';
import { AppRouter } from './Common/Application/AppRouter/AppRouter';
import { RouteMethods } from './Common/Application/AppRouter/AppRouter.types';
import { logInfo } from './utils/logger';
import dotenv from 'dotenv';

import service from './service';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

const port = process.env.PORT || 8080;

service.listen(port, () => {
  logInfo(`server started at http://localhost:${port}`, 'Server.ts');
});
