const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;

// Middleware to parse JSON body
app.use(express.json());

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
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Create operation (POST)
app.post('/api/data', (req, res) => {
  const newData = req.body;
  data.push(newData);
  fs.writeFileSync('data.json', JSON.stringify(data));
  res.json({ message: 'Data added successfully', newData });
});

// Update operation (PUT)
app.put('/api/data/:id', (req, res) => {
    console.log(data);
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
app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.json({ message: 'Data deleted successfully' });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
