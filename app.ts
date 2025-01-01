import express, { ErrorRequestHandler } from "express";
import authorRouter from "./routes/authorRouter";
import bookRouter from "./routes/bookRouter";
import indexRouter from "./routes/indexRouter";
import path from "node:path";

const app = express();

const __dirname = import.meta.dirname;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

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
