const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let users = []; // Store user data in memory

// Signup Route
app.post("/signup", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }
    users.push({ username, password });
    res.json({ message: "Signup successful", user: { username } });
    console.log(users);
});

// Login Route
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);
    
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful", user: { username } });
});

app.get('/',(req,res)=> {
    res.send("Hello World from Backend!");
})
// Start Server
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
