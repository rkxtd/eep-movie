const restify = require('restify');
const dotenv = require('dotenv');
const serverHealth = require('server-health');
const corsMiddleware = require('restify-cors-middleware');
dotenv.config();
const { MDB_API_KEY, PORT, API_PORT, ENV } = process.env;
const server = restify.createServer();
const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
});

server.pre(cors.preflight)
server.use(cors.actual)
serverHealth.exposeHealthEndpoint(server);
const respond = (req, res, next) => {
    res.json({ MDB_API_KEY });
    next();
};

server.get('/api/get-mdb-api-key', respond);
if (ENV !== 'dev') {
    server.get('/*', restify.plugins.serveStatic({
        directory: './dist/public/',
        default: 'index.html'
    }));
}

server.listen(PORT || API_PORT, () => console.log('%s listening at %s', server.name, server.url));
