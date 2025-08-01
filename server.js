// server.js
const express = require("express");
const app = express();
const cors = require("cors");

// CORS 설정을 위한 헤더
app.use(
  cors({
    origin: "http://127.0.0.1:5501",
    methods: ["OPTIONS", "GET", "POST", "PUT", "DELETE"],
  })
);

let data = { message: "여러분 화이팅!" };

app.use(express.json());
app.use(express.text());

app.options("/", (req, res) => {
  return res.send("요청 보내세요");
});

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/", (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
});

app.put("/", (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

app.delete("/", (req, res) => {
  data = {};
  res.send("데이터가 삭제되었습니다.");
});

app.listen(3002, () => {
  console.log("서버가 http://localhost:3002/ 에서 실행 중입니다.");
});
