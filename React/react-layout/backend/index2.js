const express = require('express');
require("dotenv").config()
const fs = require('fs');
const server = express();
const PORT = process.env.SERVER_PORT  || 5001;

// Middleware to parse JSON body
server.use(express.json());
// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Load data from JSON file
// let data = JSON.parse(fs.readFileSync('data.json'));
let data;
fs.readFile('data.json', (err, jsonData) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  data = JSON.parse(jsonData);
});
// Read operation (GET)
server.get('/api/data', (req, res) => {
  console.log("fetching data...");
  res.json(data);
});

// Create operation (POST)
server.post('/api/data', (req, res) => {
  // res.sendStatus(403);
  // console.log(req.body);
  const newData = req.body;
  newData.name=newData.name+" Saini"
  data.push(newData);
  fs.writeFileSync('data.json', JSON.stringify(data));
  res.json({ message: 'Data added successfully', newData });
});

// Update operation (PUT)
server.put('/api/data/:id', (req, res) => {
    // console.log(data);
    console.log("going to change .. "+req.params.id);
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  const index = data.findIndex(item =>item.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...updatedData };
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.json({ message: 'Data updated successfully', updatedData });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// Delete operation (DELETE)
server.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data.splice(index,1);
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.json({ message: 'Data deleted successfully' });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

