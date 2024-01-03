import express from "express";
import pug from "pug";
import { SublinksClient } from "sublinks-js-client";
const router = express.Router();

router.get("/", (req, res) => {
  res.send(pug.renderFile("views/community.pug"));
});

router.post("/", (req, res) => {
  res.redirect(`/community/${req.body.community}@${req.body.site}`);
});

router.get("/:input", async (req, res) => {
  try {
    const input = req.params.input;
    const args = req.params.input.split("@");
    if (args.length !== 2) throw new Error("Invalid input.");
    const client = new SublinksClient(args[1]);
    const community = await client.getCommunity({ name: input });

    const name = community.community_view.community.title;
    let url = input;

    // get url arguments

    // question mark if first argument given, ampersand otherwise.
    let first = true;
    if (req.query.label) {
      url += "?label=" + req.query.label;
      first = false;
    }
    if (req.query.prefix) {
      if (first) url += "?";
      else url += "&";
      url += "prefix=" + req.query.prefix;
      first = false;
    }
    if (req.query.suffix) {
      if (first) url += "?";
      else url += "&";
      url += "suffix=" + req.query.suffix;
      first = false;
    }
    if (req.query.color) {
      if (first) url += "?";
      else url += "&";
      url += "color=" + req.query.color.replace("#", "");
      first = false;
    }
    if (req.query.style) {
      if (first) url += "?";
      else url += "&";
      url += "style=" + req.query.style;
      first = false;
    }
    if (req.query.logo) {
      if (first) url += "?";
      else url += "&";
      url += "logo=" + req.query.logo;
      first = false;
    }
    if (req.query.logoColor) {
      if (first) url += "?";
      else url += "&";
      url += "logoColor=" + req.query.logoColor.replace("#", "");
      first = false;
    }
    if (req.query.labelColor) {
      if (first) url += "?";
      else url += "&";
      url += "labelColor=" + req.query.labelColor.replace("#", "");
      first = false;
    }

    res.render("community-url.pug", {
      url: url,
      link: req.query.link,
      name,
      label: req.query.label,
      prefix: req.query.prefix,
      suffix: req.query.suffix,
      color: req.query.color,
      style: req.query.style,
      logo: req.query.logo,
      logoColor: req.query.logoColor,
      labelColor: req.query.labelColor,
    });
  } catch (e) {
    res.send(pug.renderFile("views/error-find.pug"));
  }
});

export default router;
