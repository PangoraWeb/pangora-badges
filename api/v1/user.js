import express from "express";
import comments from "./user/comments.js";
import posts from "./user/posts.js";
import name from "./user/name.js";
import display_name from "./user/display-name.js";
import isAdmin from "./user/is-admin.js";
import isBot from "./user/is-bot.js";
import matrix from "./user/matrix.js";

const router = express.Router();

router.get("/", (req, res) => {
  // send a 404 error if no site stat is specified
  res.status(404);
  return res.send("Please specify an user stat.");
});

router.use("/comments", comments);
router.use("/posts", posts);
router.use("/name", name);
router.use("/display-name", display_name);
router.use("/is-admin", isAdmin);
router.use("/is-bot", isBot);
router.use("/matrix", matrix);

export default router;
