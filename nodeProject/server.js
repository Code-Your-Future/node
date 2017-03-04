
const mustacheExpress=require('mustache-express');
const fs = require('fs');
const express = require('express');

const app=express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname +'/views');
app.use(express.static("public"));

const formidable = require('express-formidable');

app.use(formidable());// middleware to extract data from the server 

app.post("/create-post",(req,res) => {
	fs.readFile(__dirname + "/data/posts.json",(error,file) => {
		if(error){
			throw error
		}
		const parsedFile=JSON.parse(file);
		const date= Date.now();
		parsedFile[date]=req.fields.blogpost;

		fs.writeFile(__dirname + "/data/posts.json",JSON.stringify(parsedFile),(error) => {
			if(error){
				throw error;
			}
			res.json(parsedFile);			
		});	
	
	})
})

app.get("/get-posts",(req,res) => {
	res.sendFile(__dirname + "/data/posts.json");
})

app.get("/about",(req,res) => { 
	res.send(`
			<!DOCTYPE html>
			<html>
				<head>
					<title> About </title>					
				</head>
				<body>
					<h1> About </h1>
					<p> ${req.url} : the request : ${req.method}</p>
				</body>
			</html>
		`);
})

app.get('/posts/:postId', (req, res) => {
	console.log(req.params.postId);
	postId = req.params.postId;
	fs.readFile(__dirname + "/data/posts.json",(error,file) => {
		if(error){
			throw error;
		}
		const parsedFile = JSON.parse(file);
		const postData = parsedFile[postId];
		res.render("post",{ post : postData});
	});

});


app.listen(3000, () => {
	console.log("Server is listening on port 3000. Ready to accept requests!");
});