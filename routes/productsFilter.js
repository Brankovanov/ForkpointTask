const { MongoClient } = require('mongodb');
let resultArr = [];
let headerArr = [];

module.exports = function routeIndex(req, res) {
    const id = req.params;
    let body = req.body;
    let c;
    let slicedId = id.id.slice(1);
    let filter = "";
    let check = 0;

    MongoClient.connect('mongodb://localhost:27017/onlineShop', (err, client) => {
        if (err) throw err;
        const db = client.db('onlineShop');
        c = db.collection('products').find({ id: slicedId });
        const h = db.collection('categories').find({}, { categories: 0 })
        h.forEach((doc, err) => {
            headerArr.push(doc);
        });
        c.forEach((doc, err) => {
                doc.variants.forEach((e, err) => {
                    for (let value of Object.keys(body)) {
                        check++;
                        if (e.variation_values[value] != body[value]) {
                            check = 0;
                            break;
                        }
                    }
                    if (check != 0) {
                        doc.price = e.price;
                        resultArr.push(doc);
                        filter = "This combination is in stock";
                    }
                })

                if (resultArr.length == 0) {
                    resultArr.push(doc);
                    filter = "This combination is out of stock";
                }
            },
            () => {
                res.render('products/products', { title: 'suits', filters: filter, results: resultArr, filterValues: body, header: headerArr });
                client.close();
                resultArr = [];
                headerArr = [];

            });
    });
};