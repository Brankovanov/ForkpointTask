let resultArr = [];
let headerArr = [];

module.exports = function routeIndex(req, res) {
    const id = req.params;
    let body = req.body;
    let queryResults;
    let slicedId = id.id.slice(1);
    let filter = "";
    let check = 0;

    const db = req.app.locals.collection;
    queryResults = db.collection('products').find({ id: slicedId });
    const headerQuery = db.collection('categories').find({}, { categories: 0 })
    headerQuery.forEach((doc, err) => {
        headerArr.push(doc);
    });
    queryResults.forEach((doc, err) => {
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
            resultArr = [];
            headerArr = [];

        });
};