const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Home Route
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to my Server');
    } else if (req.url === '/text') {
        // Text Route
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is a plain text response.');
    } else if (req.url === '/html') {
        // HTML File Route
        const htmlPath = path.join(__dirname, 'index.html');
        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading HTML file.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/image') {
        // Image Route
        const imgPath = path.join(__dirname, 'assets/the-chaffins-Vd_s71-WVcA-unsplash.jpg');
        fs.readFile(imgPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading image.');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(data);
            }
        });
    } else if (req.url === '/audio') {
        // Audio Route
        const audioPath = path.join(__dirname, 'assets/bole_no_koyal_dhoni.mp3');
        fs.readFile(audioPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading audio.');
            } else {
                res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
                res.end(data);
            }
        });
    } else if (req.url === '/video') {
        // Video Route
        const videoPath = path.join(__dirname, 'assets/2341924-hd_1920_1080_30fps.mp4');
        fs.readFile(videoPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading video.');
            } else {
                res.writeHead(200, { 'Content-Type': 'video/mp4' });
                res.end(data);
            }
        });
    } else if (req.url === '/pdf') {
        // PDF Route
        const pdfPath = path.join(__dirname, 'assets/Binary Code 04-Sep-2024 00-48-42 (2).pdf');
        fs.readFile(pdfPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading PDF.');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/pdf' });
                res.end(data);
            }
        });
    } else {
        // 404 Route
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found.');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
