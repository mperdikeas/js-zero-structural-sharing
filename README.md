# WARNING

This project has been renamed, use [structural-sharing](https://www.npmjs.com/package/structural-sharing) instead
([js-structural-sharing] (https://github.com/mperdikeas/js-structural-sharing) in github).


# js-zero-structural-sharing
Tests that two objects (recursively) have zero structural sharing. In other words, nowhere do they access a common memory location.

## Installation


    npm install zero-structural-sharing --save


## Usage

```javascript

  import {shareMemory} from 'zero-structural-sharing'

```

## Examples
```javascript

   import {shareMemory} from 'zero-structural-sharing'
   const o = {};
   const a1 = {a1: {a2: {v:1, y:2}, a3: o}, a4: [1,2,3,4]};
   const a2 = {a1: {a2: [1, 2,3, [1, 3, [1, 2, o]]]}, a4: [1,2,3,4]};           
   assert.isTrue(shareMemory(o, a1));
   assert.isTrue(shareMemory(o, a2));
   assert.isTrue(shareMemory(a1, a2));           

```

For more examples look in file *test.js*


## Tests

    npm test

