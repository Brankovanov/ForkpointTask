const { MongoClient } = require('mongodb');
let resultArr = [];
let headerArr = [];

module.exports = function routeIndex(req, res) {
    const id = req.params;
    let c;

    MongoClient.connect('mongodb://localhost:27017/onlineShop', (err, client) => {
        if (err) throw err;
        const db = client.db('onlineShop');
        const h = db.collection('categories').find({}, { categories: 0 })
        h.forEach((doc, err) => {
            headerArr.push(doc);
        });

        switch (id.id) {
            case ':mens-clothing-suits':
                c = db.collection('products').find({ primary_category_id: "mens-clothing-suits" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Suits', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':mens-clothing-jackets':
                c = db.collection('products').find({ primary_category_id: "mens-clothing-jackets" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Jackets & Coats', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':mens-clothing-dress-shirts':
                c = db.collection('products').find({ primary_category_id: "mens-clothing-dress-shirts" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Dress Shirts', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':mens-clothing-shorts':
                c = db.collection('products').find({ primary_category_id: "mens-clothing-shorts" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Shorts', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':mens-clothing-pants':
                c = db.collection('products').find({ primary_category_id: "mens-clothing-pants" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':mens-accessories-luggage':
                c = db.collection('products').find({ primary_category_id: "mens-accessories-luggage" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':mens-accessories-gloves':
                c = db.collection('products').find({ primary_category_id: "mens-accessories-gloves" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':mens-accessories-ties':
                c = db.collection('products').find({ primary_category_id: "mens-accessories-ties" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-outfits':
                c = db.collection('products').find({ primary_category_id: "womens-outfits" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-clothing-tops':
                c = db.collection('products').find({ primary_category_id: "womens-clothing-tops" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-clothing-dresses':
                c = db.collection('products').find({ primary_category_id: "womens-clothing-dresses" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-clothing-bottoms':
                c = db.collection('products').find({ primary_category_id: "womens-clothing-bottoms" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-clothing-dresses':
                c = db.collection('products').find({ primary_category_id: "womens-clothing-dresses" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-clothing-jackets':
                c = db.collection('products').find({ primary_category_id: "womens-clothing-jackets" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-clothing-feeling-red':
                c = db.collection('products').find({ primary_category_id: "womens-clothing-feeling-red" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-jewelry-earrings':
                c = db.collection('products').find({ primary_category_id: "womens-jewelry-earrings" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-jewlery-bracelets':
                c = db.collection('products').find({ primary_category_id: "womens-jewlery-bracelets" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-jewelry-necklaces':
                c = db.collection('products').find({ primary_category_id: "womens-jewelry-necklaces" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-accessories-shoes':
                c = db.collection('products').find({ primary_category_id: "womens-accessories-shoes" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;

            case ':womens-accessories-scarves':
                c = db.collection('products').find({ primary_category_id: "womens-accessories-scarves" });

                c.forEach((doc, err) => {
                        resultArr.push(doc);
                    },
                    () => {
                        res.render('subcategories/subcategories', { title: 'Products', results: resultArr, header: headerArr });
                        client.close();
                        resultArr = [];
                        headerArr = [];
                    });
                break;
        }
    });
};