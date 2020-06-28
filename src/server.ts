import express from 'express';
const port  = 3000;

const app = express();

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello, world!'
  })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}...`)
})

