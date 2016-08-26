Random Fact
===========

Make your build tasks a little more interesting, with a random fact!

![Example](https://cloud.githubusercontent.com/assets/1136811/18007838/9020fc7a-6b9d-11e6-8bf1-7d39f521602d.jpg)

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