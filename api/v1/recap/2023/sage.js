import express from "express";
import fs from "fs";
import { RequestStaticBadge } from "../../../../server/requestBadge.js";

let icon = fs.readFileSync("./public/icons/scroll.svg", "utf8");

const router = express.Router();

// site cache, key is site url, value is image gotten and a timestamp
const cache = {};

router.get("/", async (req, res) => {
  const label = req.query.label || "Recap";
  const prefix = req.query.prefix;
  const suffix = req.query.suffix;
  const color = req.query.color || "3578c4";
  const style = req.query.style;
  const labelColor = req.query.labelColor;
  const logoColor = req.query.logoColor;
  const value = "Role: Sage (Lvl: 7)";

  let localIcon = icon.replace(
    /stroke="currentColor"/g,
    `stroke="${logoColor || "#ffffff"}"`
  );
  var b64 = "data:image/svg%2bxml;base64," + btoa(localIcon);

  const logo = req.query.logo || b64;

  const badge = await RequestStaticBadge(
    { label, prefix, suffix, color, style, logo, logoColor, labelColor, value },
    cache
  );

  res.contentType("image/svg+xml");
  res.status(200);
  return res.end(badge, "binary");
});

export default router;
