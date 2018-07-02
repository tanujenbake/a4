//Install express server
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(req,res) {
    
res.sendFile(path.join(__dirname, 'dist/a1/index.html'));
});

// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, ()=> console.log('running'));
