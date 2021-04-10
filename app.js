/* eslint-disable global-require */
// Module dependencies.
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017/onlineShop';
// Database Name
const dbName = 'onlineShop';
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect((err) => {
    assert.equal(null, err);
    console.log(`Connected successfully to ${dbName}`);
    const db = client.db(dbName);
    app.locals.collection = db;
    //client.close();
});

const routes = {
    index: require('./routes/index'),
    categories: require('./routes/categories'),
    subcategories: require('./routes/subcategories'),
    products: require('./routes/products'),
    productsFilter: require('./routes/productsFilter')
};



// All environments
app.set('port', 1666);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.cookieParser('61d333a8-6325-4506-96e7-a180035cc26f'));
app.use(session({
    secret: 'forkpoint training',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
app.use(express.errorHandler());


app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

// App routes
app.get('/', routes.index);
app.get('/categories/:id', routes.categories);
app.get('/subcategories/:id', routes.subcategories);
app.get('/products/:id', routes.products);
app.post('/products/:id', routes.productsFilter);

// Run server
http.createServer(app).listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log(`Express server listening on port ${app.get('port')}`);
});