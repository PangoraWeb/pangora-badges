import express from "express";
import version from "./site/version.js";
import users from "./site/users.js";
import comments from "./site/comments.js";
import posts from "./site/posts.js";
import communities from "./site/communities.js";
import users_active_day from "./site/users-active-day.js";
import users_active_week from "./site/users-active-week.js";
import users_active_month from "./site/users-active-month.js";
import users_active_half_year from "./site/users-active-half-year.js";
import enabled_nsfw from "./site/enabled-nsfw.js";
import name from "./site/name.js";
import domain from "./site/domain.js";
import enabled_downvotes from "./site/enabled-downvotes.js";

const router = express.Router();

router.get("/", (req, res) => {
  // send a 404 error if no site stat is specified
  res.status(404);
  return res.send("Please specify an site stat.");
});

router.use("/version", version);
router.use("/users", users);
router.use("/comments", comments);
router.use("/posts", posts);
router.use("/communities", communities);
router.use("/users-active-day", users_active_day);
router.use("/users-active-week", users_active_week);
router.use("/users-active-month", users_active_month);
router.use("/users-active-half-year", users_active_half_year);
router.use("/enabled-nsfw", enabled_nsfw);
router.use("/name", name);
router.use("/domain", domain);
router.use("/enabled-downvotes", enabled_downvotes);

export default router;
