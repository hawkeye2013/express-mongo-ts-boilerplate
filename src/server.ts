import express from 'express';
import { AppRouter } from './Common/Application/AppRouter/AppRouter';
import { RouteMethods } from './Common/Application/AppRouter/AppRouter.types';
import { logInfo } from './utils/logger';
const app = express();
const port = 8080; // default port to listen

const router = new AppRouter({
  routes: [
    {
      method: RouteMethods.GET,
      path: '/',
      roles: [],
      handler: (req, res) => {
        res.send('Hello World From Router!');
      },
    },
  ],
});

app.use('/', router.getRouter());

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  logInfo(`server started at http://localhost:${port}`);
});
