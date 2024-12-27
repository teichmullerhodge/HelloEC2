"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware to parse JSON requests
app.use(express_1.default.json()); // Should be before routes
// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});
app.get('/login', (req, res) => {
    console.log("Login route hit"); // Log to see if this gets triggered
    res.send('Login page');
});
app.get('/test', (req, res) => {
    console.log("Test route hit"); // Log to see if this gets triggered
    res.send('Test page');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
