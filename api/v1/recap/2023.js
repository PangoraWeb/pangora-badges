import express from "express";
import adventurer from "./2023/adventurer.js";
import lurker from "./2023/lurker.js";
import blacksmith from "./2023/blacksmith.js";
import alchemist from "./2023/alchemist.js";
import vanguard from "./2023/vanguard.js";
import rookie from "./2023/rookie.js";
import explorer from "./2023/explorer.js";
import artisan from "./2023/artisan.js";
import champion from "./2023/champion.js";
import legend from "./2023/legend.js";
import sage from "./2023/sage.js";
import scholar from "./2023/scholar.js";
import scribe from "./2023/scribe.js";
import wizard from "./2023/wizard.js";

const router = express.Router();

router.get("/", (req, res) => {
  // send a 404 error if no site stat is specified
  res.status(404);
  return res.send("Please specify an recap stat.");
});

router.use("/adventurer", adventurer);
router.use("/lurker", lurker);
router.use("/blacksmith", blacksmith);
router.use("/alchemist", alchemist);
router.use("/vanguard", vanguard);
router.use("/rookie", rookie);
router.use("/explorer", explorer);
router.use("/artisan", artisan);
router.use("/champion", champion);
router.use("/legend", legend);
router.use("/sage", sage);
router.use("/scholar", scholar);
router.use("/scribe", scribe);
router.use("/wizard", wizard);

export default router;
