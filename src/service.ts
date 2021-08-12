import { Application } from './Common/Application/Application';
import { AppRouter } from './Common/Application/AppRouter/AppRouter';
import { RouteMethods } from './Common/Application/AppRouter/AppRouter.types';

const app = new Application();

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

app.use('/', router);

export default app;
