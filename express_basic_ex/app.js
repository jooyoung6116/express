const express = require('express');
const app = express();


app.set('PORT', 8000);


app.use((req,res, next) => {
	console.log("공통 라우터 입니다");
	next();
});


app.get("/",(req,res) =>{
	
});


app.get("/join", (req,res) => {
	return res.send("join 페이지 입니다.");
});


app.get("/login", (req,res) => {
	return res.send("login 페이지 입니다.");
});


app.use((req, res, next) => {
	return res.status(404).send(`${req.url}은 없는 페이지 입니다.`);
});

app.use((err, req, res, next) => {
	return res.status(500).send(err.message);
});


app.listen(app.get("PORT"), () =>{
	console.log(app.get("PORT"), "에서 서버 대기중입니다.");
});