import express from 'express';

import { AppRouter } from '../../../Common/Application/AppRouter/AppRouter';
import { RouteMethods } from '../../../Common/Application/AppRouter/AppRouter.types';

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

export default router;
