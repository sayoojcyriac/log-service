"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// POST endpoint for logging
app.post("/api/v1/logs", (req, res) => {
    console.log(req.body); // Log the JSON payload to the console
    res.status(200).send("Log received");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
