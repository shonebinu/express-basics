import { Router } from "express";

const indexRouter = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

indexRouter.get("/", (req, res) => {
  res.render("index", { links, users });
});

indexRouter.get("/about", (req, res) => {
  res.render("about", { message: "Hi world" });
});

indexRouter.get("/contact", (req, res) => {
  res.send("Contact");
});

indexRouter.post("/contact", (req, res) => {
  res.send("Contact Post");
});

export default indexRouter;
