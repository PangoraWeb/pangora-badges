import express from "express";
import Y2023 from "./recap/2023.js";

const router = express.Router();

router.get("/", (req, res) => {
  // send a 404 error if no site stat is specified
  res.status(404);
  return res.send("Please specify an recap stat.");
});

router.use("/2023", Y2023);

export default router;
