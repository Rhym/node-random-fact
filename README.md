Random Fact
===========

Make your build tasks a little more interesting, with a random fact!

Installation
------------

```bash
npm i --save random-fact
```

Usage
-----

```javascript
var fact = require('random-fact');
fact();
```

#### Gulp

```javascript
gulp.task('random-fact', cb => {
  require('random-fact')();
  cb();
});
```