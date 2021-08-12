import { Application } from './Common/Application/Application';
import { AppRouter } from './Common/Application/AppRouter/AppRouter';
import { RouteMethods } from './Common/Application/AppRouter/AppRouter.types';
import mongoose from 'mongoose';

const buildMongoUrl = () => {
  const { MONGO_HOST, MONGO_PORT, MONGO_USER, MONGO_PASS, MONGO_DB } =
    process.env;

  if (!MONGO_USER || !MONGO_PASS) {
    return `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
  }
  return `mongodb://${MONGO_HOST}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
};

mongoose.connect(buildMongoUrl(), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
