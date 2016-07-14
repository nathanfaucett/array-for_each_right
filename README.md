array-for_each_right
=======

executes a provided function once per array element.


```javascript
var arrayForEachRight = require("@nathanfaucett/array-for_each_right");


arrayForEachRight([2, 4, 6], function(value, index, array) {
    console.log(value, index, array);
});
```
