import express from "express";
import { RequestBadge } from "../../../server/requestBadge.js";
const router = express.Router();

// site cache, key is site url, value is image gotten and a timestamp
const cache = {};

router.get("/", (req, res) => {
  // send a 404 error if no site is specified
  res.status(404);
  return res.send("Please specify a site.");
});

router.get("/:site", async (req, res) => {
  const label = req.query.label || "Comments";
  const prefix = req.query.prefix;
  const suffix = req.query.suffix;
  const color = req.query.color || "a023ca";
  const style = req.query.style;
  const logo = req.query.logo;
  const logoColor = req.query.logoColor;
  const labelColor = req.query.labelColor;

  const badge = await RequestBadge(
    req.params.site,
    "%24.site_view.counts.comments",
    { label, prefix, suffix, color, style, logo, logoColor, labelColor },
    cache
  );

  res.contentType("image/svg+xml");
  res.status(200);
  return res.end(badge, "binary");
});

export default router;
