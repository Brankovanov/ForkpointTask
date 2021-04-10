var resultArr = [];
module.exports = function routeIndex(req, res) {
    const db = req.app.locals.collection;
    const queryResults = db.collection('categories').find({}, { categories: 0 });
    queryResults.forEach((doc, err) => {
            resultArr.push(doc);
        },
        () => {
            res.render('index', { title: 'Online shop', results: resultArr, header: resultArr });
            resultArr = [];
        });
};