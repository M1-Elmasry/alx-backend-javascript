import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;
const databaseFilePath = process.argv[2];

app.use((req, res, next) => {
  req.databaseFilePath = databaseFilePath;
  next();
});

app.use(router);

app.listen(port);

export default app;
