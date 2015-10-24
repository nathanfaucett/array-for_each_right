module.exports = arrayForEachRight;


function arrayForEachRight(array, callback) {
    var i = array.length;

    while (i--) {
        if (callback(array[i], i, array) === false) {
            break;
        }
    }

    return array;
}
