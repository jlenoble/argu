# argu
Helper for preprocessing arguments before passing to functions

## Usage

Helpers in this package help make sure that arguments passed to functions are arrays when arrays are expected, objects when objects are expected and the like.

### toArray

```toArray``` takes all arguments and returns an array of them if not already an array.

```js
import {toArray} from 'argu';

toArray();        // []
toArray(1);       // [1]
toArray(1, 2, 3); // [1, 2, 3]
toArray([1]);     // [1]
toArray(1, [2]);  // [1, [2]]
toArray([1], 2);  // [[1], 2]
toArray([1, 2]);  // [1, 2]
```

## License

argu is [MIT licensed](./LICENSE).

© 2016 [Jason Lenoble](mailto:jason.lenoble@gmail.com)
