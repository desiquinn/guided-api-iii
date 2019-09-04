const server = require('./API/server.js');

const port = 8000;

server.listen(8000, () => console.log(`\n API running on ${port}\n`));