const dic = require("./dayDictionary");
test("Dictionary Matched", () => {
    expect(dic({'2020-01-01':6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07':4})).toStrictEqual({ 'Mon': 2, 'Tue': 4, 'Wed': 6, 'Thu': 8, 'Fri': 10, 'Sat': 12, 'Sun': 14 });
});