let resultArr = [];
let headerArr = [];

module.exports = function routeIndex(req, res) {
    const id = req.params;
    const splitId = id.id.slice(1)
    let queryResults;

    const db = req.app.locals.collection;
    const headerResults = db.collection('categories').find({}, { categories: 0 })
    headerResults.forEach((result, err) => {
        headerArr.push(result);
    });

    queryResults = db.collection('products').find({ primary_category_id: splitId });

    queryResults.forEach((result, err) => {
            resultArr.push(result);
        },
        () => {
            var name = resultArr[0].primary_category_id.replace(/-/g, " ");
            name = name.charAt(0).toUpperCase() + name.slice(1)
            res.render('subcategories/subcategories', { title: name, results: resultArr, header: headerArr });
            resultArr = [];
            headerArr = [];
        });
};