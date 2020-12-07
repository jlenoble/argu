## Usage !heading

Helpers in this package help make sure that arguments passed to functions are arrays when arrays are expected, objects when objects are expected and the like.

### ```toArray``` !heading

```toArray``` takes all arguments and returns an array of them if not already an array.

```js
import {toArray} from 'argu';

toArray();        // []
toArray(1);       // [1]
toArray([1]);     // [1]
toArray(1, 2);    // [1, 2]
toArray(1, [2]);  // [1, [2]]
toArray([1], 2);  // [[1], 2]
toArray([1, 2]);  // [1, 2]
```

### ```toArrayOfArrays``` !heading

```toArrayOfArrays``` takes all arguments and returns an array of arrays, if not already that.

```js
import {toArrayOfArrays} from 'argu';

toArrayOfArrays();          // [[]]
toArrayOfArrays(1);         // [[1]]
toArrayOfArrays([1]);       // [[1]]
toArrayOfArrays(1, 2);      // [[1], [2]]
toArrayOfArrays(1, [2]);    // [[1], [2]]
toArrayOfArrays([1], 2);    // [[1], [2]]
toArrayOfArrays([1, 2]);    // [[1], [2]]
toArrayOfArrays([1], [2]);  // [[1], [2]]
toArrayOfArrays([[1], 2]);  // [[1], [2]]
```

#include "build/docs/examples/usage.test.md"
