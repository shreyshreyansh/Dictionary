const dic = require("./dayDictionary");
test("Dictionary Matched", () => {
    expect(dic({'2020-01-02': 4,'2020-01-05': 2, '2020-01-06': -6})).toStrictEqual({ 'Mon': -6, 'Tue': -3, 'Wed': 0, 'Thu': 4, 'Fri': 3, 'Sat': 2, 'Sun': 2 });
});