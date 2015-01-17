var assert = require("assert"),
    isBoolean = require("../src/index");


describe("isBoolean(obj)", function() {
    it("should return true when the value is a Boolean", function() {
        assert.equal(isBoolean(null), false);
        assert.equal(isBoolean(undefined), false);
        assert.equal(isBoolean(0), false);
        assert.equal(isBoolean({}), false);
        assert.equal(isBoolean([]), false);
        assert.equal(isBoolean(/./), false);
        assert.equal(isBoolean(function noop() {}), false);

        assert.equal(isBoolean(true), true);
        assert.equal(isBoolean(false), true);
    });
});
