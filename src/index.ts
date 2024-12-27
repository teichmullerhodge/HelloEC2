import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.get('/login', (req: Request, res: Response) => {

  res.send('Login page');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
