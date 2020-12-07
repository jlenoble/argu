# argu

Helper for preprocessing arguments before passing to functions

  * [Usage](#usage)
    * [```toArray```](#toarray)
    * [```toArrayOfArrays```](#toarrayofarrays)
  * [License](#license)


## Usage

Helpers in this package help make sure that arguments passed to functions are arrays when arrays are expected, objects when objects are expected and the like.

### ```toArray```

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

### ```toArrayOfArrays```

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

```js
// File "./usage.test.ts"
import Argu from "argu";

const defaultArgs = [];

new Argu(...defaultArgs);
```


## License

argu is [MIT licensed](./LICENSE).

© 2020 [Jason Lenoble](mailto:jason.lenoble@gmail.com)

