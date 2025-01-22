const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const userAgent = req.headers["user-agent"].toLowerCase();
    const iosLink = req.query.ios || "#";
    const androidLink = req.query.android || "#";
    const windowsLink = req.query.windows || "#";
    const macLink = req.query.mac || "#";

    if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
        res.redirect(iosLink);
    } else if (userAgent.includes("android")) {
        res.redirect(androidLink);
    } else if (userAgent.includes("windows")) {
        res.redirect(windowsLink);
    } else if (userAgent.includes("macintosh")) {
        res.redirect(macLink);
    } else {
        res.send("Unsupported device");
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
