import express, { NextFunction, Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies and handle errors
app.use(
  express.json({
    verify: (req, res, buf, encoding) => {
      try {
        JSON.parse(buf.toString());
      } catch (e) {
        throw new Error("Invalid JSON");
      }
    },
  })
);

// POST endpoint for logging
app.post("/api/v1/logs", (req: Request, res: Response) => {
  console.log(req.body); // Log the JSON payload to the console
  res.status(200).send("Log received");
});

// Error handling for JSON parsing errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.message === "Invalid JSON") {
    console.error(err);
    return res.status(400).json({ message: "Invalid JSON payload provided." });
  }
  next(err); // If it's not a JSON parse error, pass it to the default error handler
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
