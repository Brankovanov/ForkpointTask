const { MongoClient } = require('mongodb');
let resultArr = [];
let headerArr = [];

module.exports = function routeIndex(req, res) {
    const id = req.params;
    let c;
    let slicedId = id.id.slice(1);

    MongoClient.connect('mongodb://localhost:27017/onlineShop', (err, client) => {
        if (err) throw err;
        const db = client.db('onlineShop');


        c = db.collection('products').find({ id: slicedId });
        const h = db.collection('categories').find({}, { categories: 0 })
        h.forEach((doc, err) => {
            headerArr.push(doc);
        });

        c.forEach((doc, err) => {
                resultArr.push(doc);
            },
            () => {
                res.render('products/products', { title: 'Suits', filters: ' ', results: resultArr, filterValues: null, header: headerArr });
                client.close();
                resultArr = [];
                headerArr = [];
            });
    });
};