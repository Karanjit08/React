const { sum } = require("../src/sum");


test('This should test the sum function working properly or not', 
    () => { 
        var result = sum(3,7);
        expect(result).toBe(10);
     });