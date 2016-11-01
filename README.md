Random Fact
===========

Make your build tasks a little more interesting, with a random fact!

![Example](https://github.com/Rhym/node-random-fact/blob/master/screenshot.png?raw=true)

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