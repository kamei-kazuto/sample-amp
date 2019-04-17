// refference
// https://amp.dev/ru/documentation/guides-and-tutorials/learn/amp-caches-and-cors/amp-cors-requests?referrer=ampproject.org
// https://qiita.com/mizchi/items/c7d648eafb03d4c5378a

const express = require("express");
const { resolve } = require("path")
const app = express();

const ampsrc = resolve(__dirname, "../docs")
app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
  const host = req.get("host");
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const origin = protocol + "://" + req.get("host");
  res.set("Access-Control-Allow-Origin", origin);
  res.set("AMP-Access-Control-Allow-Source-Origin", origin);
  res.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD, PUT");
  res.set("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.static(ampsrc));

app.listen(app.get("port"), function() {
  console.log("development: " + ampsrc)
  console.log("Listening on port " + app.get("port"));
});
