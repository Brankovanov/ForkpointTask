let resultArr = [];
let headerArr = [];

module.exports = function routeIndex(req, res) {
    const id = req.params;
    let queryResults;
    let slicedId = id.id.slice(1);

    const db = req.app.locals.collection;
    queryResults = db.collection('products').find({ id: slicedId });
    const header = db.collection('categories').find({}, { categories: 0 })
    header.forEach((doc, err) => {
        headerArr.push(doc);
    });

    queryResults.forEach((doc, err) => {
            resultArr.push(doc);
        },
        () => {
            res.render('products/products', { title: 'Suits', filters: ' ', results: resultArr, filterValues: null, header: headerArr });
            resultArr = [];
            headerArr = [];
        });
};