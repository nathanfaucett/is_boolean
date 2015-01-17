var isObjectLike = require("is_object_like");


var objectBooleanStr = "[object Boolean]",
    objectToString = Object.prototype.toString;


module.exports = function isBoolean(obj) {
    return typeof(obj) === "boolean" || (isObjectLike(obj) && objectToString.call(obj) === objectBooleanStr) || false;
};
