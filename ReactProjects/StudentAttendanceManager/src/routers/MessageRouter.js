const express = require('express');
const router = new express.Router()
const whatsappClient = require("../services/WhatsappClient")
router.get("/", (req, res) => {
    res.send("Hello world")
})
router.post("/message", (req, res) => {
    try {
        const data = req.body;  // Access the parsed data
        whatsappClient.sendMessage(req.body.phoneNumber, req.body.message);
        res.json({ message: 'message sent successfully!' });
        console.log('message sent successfully! to +'+req.body.phoneNumber);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error processing request' });
      }
})
module.exports = router