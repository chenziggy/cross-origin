var express = require("express");
var app = express();

var responsePort = 3001; // 响应请求的页面跑在3001端口
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", " Content-Type");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PATCH, PUT, DELETE"
  );
  next();
});
// 可以改变‘/’为其他的路径，改完之后serverReq.js里面的请求路径也需要改变
app.get("/", (req, res) => {
  res.send("Hello world from CROS.😡"); // 空格部分为表情，可能在编辑器不会显示
});

app.post("/", (req, res) => {
  res.send(JSON.stringify({ json: "application/json" })); // 空格部分为表情，可能在编辑器不会显示
});

app.put("/", (req, res) => {
  res.send("put 😡"); // 空格部分为表情，可能在编辑器不会显示
});

app.listen(responsePort, function () {
  console.log("cros_responser is listening on port " + responsePort);
});
