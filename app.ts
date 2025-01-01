import express, { ErrorRequestHandler } from "express";
import authorRouter from "./routes/authorRouter";
import bookRouter from "./routes/bookRouter";
import indexRouter from "./routes/indexRouter";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  res
    .status(err.statusCode || 500)
    .send(err.message || "Internal Server Error");
};

app.use(errorHandler);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
