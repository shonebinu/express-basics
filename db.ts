const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

const books = [
  { id: 1, name: "Atomic Habits" },
  { id: 2, name: "Ikigai" },
  { id: 3, name: "Deep Work" },
];

const getAuthorById = async (authorId: number) =>
  authors.find((author) => author.id === authorId);

const getBookById = async (bookId: number) =>
  books.find((book) => book.id === bookId);

export default { getAuthorById, getBookById };
