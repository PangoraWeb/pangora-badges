import express from "express";
import pug from "pug";
import v1 from "./api/v1.js";
import site from "./routes/site.js";
import community from "./routes/community.js";
import user from "./routes/user.js";
import { Command } from "commander";

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const program = new Command();

// ---

app.get("/", (_, res) => {
  res.send(pug.renderFile("views/index.pug"));
});

// Page Routes
app.use("/site", site);
app.use("/community", community);
app.use("/user", user);

// API Routes
app.use("/api/v1", v1);

// CLI
program.option("-p, --port [number]", "specify a port to use", 3000);

program.parse(process.argv);
const options = program.opts();

// -

app.listen(options.port, () => {
  console.log(`Server running on port ${options.port}`);
});
