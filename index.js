const express = require("express");

const app = express();
app.listen(8080,() => console.log("Server listening at port 8080"));

function setCORSHeaders(res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader("Access-Control-Allow-Headers", "accept, content-type");  
}

app.get("/", (req, res) => {

    setCORSHeaders(res);

    res.send("Hello World");
    res.end();
});
