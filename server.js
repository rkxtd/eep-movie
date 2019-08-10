const restify = require('restify');
const dotenv = require('dotenv');
const serverHealth = require('server-health');
dotenv.config();

function respond(req, res, next) {
    res.json({
        'MDB_API_KEY': process.env.MDB_API_KEY,
    });
    next();
}

const server = restify.createServer();
serverHealth.exposeHealthEndpoint(server);
server.get('/api/get-mdb-api-key', respond);

server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});
