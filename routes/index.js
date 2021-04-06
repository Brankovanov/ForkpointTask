const { MongoClient } = require('mongodb');

const resultArr = [];

MongoClient.connect('mongodb://localhost:27017/onlineShop', (err, client) => {
    if (err) throw err;
    const db = client.db('onlineShop');
    const c = db.collection('categories').find({}, { categories: 0 });
    c.forEach((doc, err) => {
            resultArr.push(doc);
        },
        () => {
            client.close();
        });
});


module.exports = function routeIndex(req, res) {
    res.render('index', { title: 'Online shop', results: resultArr, header: resultArr });
};