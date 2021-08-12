import express from 'express';
import { AppRouter } from './Common/Application/AppRouter/AppRouter';
import { RouteMethods } from './Common/Application/AppRouter/AppRouter.types';
import { logInfo } from './utils/logger';
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

import service from './service';

const port = process.env.PORT || 8080;

service.listen(port, () => {
  logInfo(`Server started at http://localhost:${port}`, 'Server.ts');
});
