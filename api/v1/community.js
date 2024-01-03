import express from "express";
import comments from "./community/comments.js";
import posts from "./community/posts.js";
import isNSFW from "./community/is-nsfw.js";
import isPostingRestricted from "./community/is-posting-restricted.js";
import name from "./community/name.js";
import subscribers from "./community/subscribers.js";
import title from "./community/title.js";
import usersActiveDay from "./community/users-active-day.js";
import usersActiveWeek from "./community/users-active-week.js";
import usersActiveMonth from "./community/users-active-month.js";
import usersActiveHalfYear from "./community/users-active-half-year.js";

const router = express.Router();

router.get("/", (req, res) => {
  // send a 404 error if no site stat is specified
  res.status(404);
  return res.send("Please specify an user stat.");
});

router.use("/comments", comments);
router.use("/posts", posts);
router.use("/is-nsfw", isNSFW);
router.use("/is-posting-restricted", isPostingRestricted);
router.use("/name", name);
router.use("/subscribers", subscribers);
router.use("/title", title);
router.use("/users-active-day", usersActiveDay);
router.use("/users-active-week", usersActiveWeek);
router.use("/users-active-month", usersActiveMonth);
router.use("/users-active-half-year", usersActiveHalfYear);

export default router;
