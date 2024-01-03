import express from "express";
import { RequestBadge } from "../../../server/requestBadge.js";
const router = express.Router();

// site cache, key is site url, value is image gotten and a timestamp
const cache = {};

router.get("/", (req, res) => {
  // send a 404 error if no site is specified
  res.status(404);
  return res.send("Please specify a user.");
});

router.get("/:input", async (req, res) => {
  const label = req.query.label || "Subscribers";
  const prefix = req.query.prefix;
  const suffix = req.query.suffix;
  const color = req.query.color || "a023ca";
  const style = req.query.style;
  const logo = req.query.logo;
  const logoColor = req.query.logoColor;
  const labelColor = req.query.labelColor;
  const input = req.params.input;

  if (!input.includes("@")) {
    res.status(404);
    return res.send("Please specify a community in the format community@site.");
  }

  const [community, site] = input.split("@");

  const badge = await RequestBadge(
    site,
    "%24.community_view.counts.subscribers",
    { label, prefix, suffix, color, style, logo, logoColor, labelColor },
    cache,
    `community?name=${community}`,
    community
  );

  res.contentType("image/svg+xml");
  res.status(200);
  return res.end(badge, "binary");
});

export default router;
