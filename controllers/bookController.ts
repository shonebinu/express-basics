import db from "../db";
import { RequestHandler } from "express";
import CustomNotFoundError from "../errors/CustomNotFoundError";
import asyncErrorHandler from "../utils/asyncErrorHandler";

const getBookById: RequestHandler = asyncErrorHandler(async (req, res) => {
  const { bookId } = req.params;

  const book = await db.getBookById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book not found");
  }

  res.send(`Book name: ${book.name}`);
});

export { getBookById };
