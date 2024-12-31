import { Router } from "express";
import { getBookById } from "../controllers/bookController";

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send("All books");
});

bookRouter.get("/:bookId", getBookById);

bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send("Reserve");
});

bookRouter.post("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send("Reserve Post");
});

export default bookRouter;
