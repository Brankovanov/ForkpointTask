let resultArr = [];
let headerArr = [];

module.exports = function routeIndex(req, res) {
    const id = req.params;
    const slicedId = id.id.slice(1);
    const splitId = id.id.slice(1).split('-');
    let queryResults;
    const db = req.app.locals.collection;
    const header = db.collection('categories').find({}, { categories: 0 })
    header.forEach((result, err) => {
        headerArr.push(result);
    });
    var checker;
    queryResults = db.collection('categories').find({ id: { $eq: splitId[0] } });

    queryResults.forEach((result, err) => {
            if (result.id === slicedId) {
                resultArr.push(result);
                checker = true;
            }
            loop(result, slicedId, checker)
        },
        () => {
            var name = resultArr[0].name;
            res.render('categories/categories', { title: name, results: resultArr, header: headerArr });
            resultArr = [];
            headerArr = [];
        });

    function loop(arrResult, slicedId, checker) {
        arrResult.categories.forEach(categoriesLevelTwo => {
            if (categoriesLevelTwo.hasOwnProperty('categories') && arrResult.categories.length > 0 && !checker) {
                if (categoriesLevelTwo.id == slicedId) {
                    resultArr.push(categoriesLevelTwo);
                    checker = true;
                }
                loop(categoriesLevelTwo, slicedId);
            }
        });
    }
};