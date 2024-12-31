import express, { ErrorRequestHandler } from "express";
import authorRouter from "./routes/authorRouter";
import bookRouter from "./routes/bookRouter";
import indexRouter from "./routes/indexRouter";

const app = express();

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
