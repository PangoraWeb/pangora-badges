import express from "express";
const router = express.Router();
import site from "./v1/site.js";
import recap from "./v1/recap.js";
import user from "./v1/user.js";
import community from "./v1/community.js";

router.get("/", (req, res) => {
  // send a 404 error if no type is specified
  res.status(404);
  return res.send("Please specify an stat category.");
});

router.use("/site", site);
router.use("/recap", recap);
router.use("/user", user);
router.use("/community", community);

export default router;
