import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json()); // Should be before routes

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.get('/login', (req: Request, res: Response) => {
  console.log("Login route hit"); // Log to see if this gets triggered
  res.send('Login page');
});

app.get('/test', (req: Request, res: Response) => {
  console.log("Test route hit"); // Log to see if this gets triggered
  res.send('Test page');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
