// console.log("Hello in express js");
// console.log("Hello in express js");
// console.log("Hello in express js");

const express = require('express')
const server = express()
const port = 5000
console.clear();
server.listen(port, () => {
    console.log(`our server is listening on port ${port}`)
})

server.get('/', (req, res) => {
    res.send('Hello World!')
})
server.get('/vinita', (req, res) => {
    res.send('Hello Vinita!')
})

server.get('/fruits', (req, res) => {
    res.send(["Apple", "Mango", "Banana", "etc"])
})

let user = {
    name: "Aman",
    age: 24,
    mobileno: 9891062743,
    address: {
        city: "mathura",
        "country": "india"
    },
    skills: ["MEAN", "MERN", "JAVA FULLSTACK"]
}
server.get('/aman', (req, res) => {
    res.json(user);
})
