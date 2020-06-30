import express from 'express';
// src/routes/index.ts
// src/server.ts
import route from './routes';

const port = 3000;

const app = express();

app.use(express.json());
app.use(route);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${port}...`);
});
