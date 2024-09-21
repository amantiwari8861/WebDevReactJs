const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());  // Parse JSON data
const port = process.env.PORT || 5001;
const messageRouter = require("./routers/MessageRouter")
app.use(messageRouter)
const whatsappClient = require("./services/WhatsappClient")
whatsappClient.initialize()

// const whatsappClient = require("./services/WAserviceNew")
// whatsappClient.initialize()

app.use(express.json())
app.get("/", (req, res) => {
    res.send("<h1>Backend deployed successfully</h1>");
});
app.get("*", async (req, res) => {
    res.send("404 not found");
});
app.listen(port, () => {
    console.log(`Server is up and running at port ${port}`);
});