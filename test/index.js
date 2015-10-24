var tape = require("tape"),
    arrayForEachRight = require("..");


tape("arrayForEachRight(array, callback) executes a provided function once per array element, starting from the right", function(assert) {
    var count = 0;

    arrayForEachRight([0, 1, 2, 3, 4], function() {
        count += 1;
    });

    assert.equals(count, 5);
    assert.end();
});
