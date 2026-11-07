const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Welcome to the College Information Portal!');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Our college provides top-tier education in engineering, computer science, and liberal arts.');
    } else if (url === '/courses') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify([
            { id: 1, name: 'Computer Engineering' },
            { id: 2, name: 'Software Engineering' },
            { id: 3, name: 'Electrical Engineering' }
        ]));
    } else if (url === '/students') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify([
            { id: 101, name: 'Eshal', course: 'Computer Engineering' },
            { id: 102, name: 'Zimmal', course: 'Software Engineering' }
        ]));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Page Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl + C to stop the server.');
});
