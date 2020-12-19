import express from "express";

import PagesController from "./controllers/PagesController";
import PostsController from "./controllers/PostsController";

const pagesController = new PagesController();
const postsController = new PostsController();

const routes = express.Router();

routes.get("/", function (req, res) {
  return res.json({ Hello: "World" });
});
routes.get("/pages", pagesController.index);
routes.get("/posts", postsController.index);

export default routes;
