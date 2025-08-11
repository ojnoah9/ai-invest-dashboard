import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`API listening on http://localhost:${port}`)
);
