const dic = require("./dayDictionary");
test("Dictionary Matched", () => {
    expect(dic({'2020-01-01':4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2})).toStrictEqual({ 'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2 });
});