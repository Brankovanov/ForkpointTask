/* eslint-disable global-require */
// Module dependencies.
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

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
    client.close();
});

const routes = {
    index: require('./routes/index'),
    categories: require('./routes/categories'),
    subcategories: require('./routes/subcategories'),
    products: require('./routes/products'),
    productsFilter: require('./routes/productsFilter')
};

const app = express();

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
app.get('/mens/:id', routes.categories);
app.get('/mens-clothing/:id', routes.categories);
app.get('/mens-clothing-suits/:id', routes.subcategories);
app.get('/mens-clothing-jackets/:id', routes.subcategories);
app.get('/mens-clothing-dress-shirts/:id', routes.subcategories);
app.get('/mens-clothing-shorts/:id', routes.subcategories);
app.get('/mens-clothing-pants/:id', routes.subcategories);
app.get('/mens-accessories/:id', routes.categories);
app.get('/mens-accessories-luggage/:id', routes.subcategories);
app.get('/mens-accessories-gloves/:id', routes.subcategories);
app.get('/mens-accessories-ties/:id', routes.subcategories);
app.get('/womens/:id', routes.categories);
app.get('/womens-clothing/:id', routes.categories);
app.get('/womens-outfits/:id', routes.subcategories);
app.get('/womens-clothing-tops/:id', routes.subcategories);
app.get('/womens-clothing-dresses/:id', routes.subcategories);
app.get('/womens-clothing-bottoms/:id', routes.subcategories);
app.get('/womens-clothing-jackets/:id', routes.subcategories);
app.get('/womens-clothing-feeling-red/:id', routes.subcategories);
app.get('/womens-jewelry/:id', routes.categories);
app.get('/womens-jewelry-earrings/:id', routes.subcategories);
app.get('/womens-jewlery-bracelets/:id', routes.subcategories);
app.get('/womens-jewelry-necklaces/:id', routes.subcategories);
app.get('/womens-accessories/:id', routes.categories);
app.get('/womens-accessories-scarves/:id', routes.subcategories);
app.get('/womens-accessories-shoes/:id', routes.subcategories);
app.get('/categories', routes.categories);
app.get('/subcategories', routes.subcategories);
app.get('/products/:id', routes.products);

app.post('/products/:id', routes.productsFilter);

// Run server
http.createServer(app).listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log(`Express server listening on port ${app.get('port')}`);
});