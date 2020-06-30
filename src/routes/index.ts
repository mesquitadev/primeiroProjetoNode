// src/routes/index.ts
import { Router } from 'express';

const route = Router();

route.post('/', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});

export default route;
