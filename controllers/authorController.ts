import db from "../db";
import { RequestHandler } from "express";
import CustomNotFoundError from "../errors/CustomNotFoundError";
import asyncErrorHandler from "../utils/asyncErrorHandler";

const getAuthorById: RequestHandler = asyncErrorHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author name: ${author.name}`);
});

export { getAuthorById };
