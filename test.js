const assert = require('assert');
const dateCheck = require('./index.js');

describe('Date checking', function () {
    it('should return false for a non-wednesday date', function() {


        const dateToCheck = new Date('April 4, 2 23:15:30');

        assert.ok(!dateCheck(dateToCheck));

    });

    it ('should return true for a wednesday date', function () {
        const dateToCheck = new Date('April 3, 2 23:15:30');

        assert.ok(dateCheck(dateToCheck));
    });

    it ('should use Date.now() successfully', function () {
        const dateToCheck = Date.now();

        assert.ifError(dateCheck(dateToCheck));
    });

    it ('should throw if value is invalid', function () {
        assert.throws(() => {dateCheck(' some invalid value ');}, TypeError);
    });
});
