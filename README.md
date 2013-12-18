beez-ua
=========

## About

The library deside which browser has an access from _UserAgent_ for node.js or browser. This library is Forked from [zepto.js](http://zeptojs.com/).

```sh
[INFO] This library supports only smartphone browser.
[WARN] UserAgent support are planning to do at any time.
```

## npm install (basic)

```sh
$ npm install beez-ua
```

## Installing from source code

```sh
$ git clone https://github.com/CyberAgent/beez-ua.git
$ cd beez-ua
$ npm install . # install deps lib
```

### installed via npm from github

```sh
$ npm install https://github.com/CyberAgent/beez-ua.git
```

## Release files

```sh
$ ll release
beez.ua.js (size: 8220 byte)[8.2kb] optimize none
beez.ua.min.js (size: 2957 byte)[2.9kb] optimize uglify2
```

## example

```javascript

$ node
> var beezua = require('beez-ua');
undefined

> beezua.VERSION
'0.4.7'
> beezua.setup('Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25')
undefined

> beezua. [tab*2]
beezua.__defineGetter__      beezua.__defineSetter__      beezua.__lookupGetter__      beezua.__lookupSetter__      beezua.constructor           beezua.hasOwnProperty
beezua.isPrototypeOf         beezua.propertyIsEnumerable  beezua.toLocaleString        beezua.toString              beezua.valueOf

beezua.VERSION               beezua.android               beezua.bb10                  beezua.blackberry            beezua.browser               beezua.chrome
beezua.ds                    beezua.firefox               beezua.ipad                  beezua.iphone                beezua.kindle                beezua.os
beezua.playbook              beezua.ps3                   beezua.psp                   beezua.psvita                beezua.rimtabletos           beezua.safari
beezua.setup                 beezua.silk                  beezua.touchpad              beezua.webkit                beezua.webos                 beezua.wii
beezua.windowsphone

> beezua.os
{ iphone: true,
  ios: true,
  version: '6.0',
  tablet: false,
  phone: true }
> beezua.browser
{ webkit: true, version: '536.26' }
> beezua.android
null
> beezua.iphone
[ 'iPhone OS 6_0',
  'iPhone OS',
  '6_0',
  index: 25,
  input: 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25' ]

```

## Requirements

- [Underscore.js](http://underscorejs.org/)
- [mocha](http://visionmedia.github.com/mocha/)
- [Chai](http://chaijs.com/)
- [JSHint](http://www.jshint.com/)
- [plato](https://github.com/jsoverson/plato)
- [jsdoc3](https://github.com/jsdoc3/jsdoc)
- [should](https://npmjs.org/package/should)



## test (browser)

```sh
$ cd beez-ua/
$ open spec/index.html
```

## test (node.js)

```sh
$ make test
```

## build

```sh
$ make build
```

## jshint

```sh
$ make jshint
```

## jsdoc

```sh
$ make jsdoc
$ open ./docs/index.html
```

## report [plato](https://github.com/jsoverson/plato)

```sh
$ make test
./node_modules/mocha/bin/mocha test/test-*.js


  beez-ua
    ✓ window.nagigator.userAgent 
    ✓ ua.Android 2.x 
    ✓ ua.Android 3.x 
    ✓ ua.Android 4.x 
    ✓ ua.iphone (IOS4) 
    ✓ ua.iphone (IOS5) 
    ✓ ua.iphone (IOS6) 
    ✓ ua.iphone (IOS4-ipad) 
    ✓ ua.iphone (IOS5-ipad) 
    ✓ ua.iphone (IOS6-ipad) 
    ✓ ua.blackberry 
    ✓ ua.webos 
    ✓ ua.touchpad 
    ✓ ua.kindle 
    ✓ ua.silk 
    ✓ ua.bb10 
    ✓ ua.rimtabletos 
    ✓ ua.playbook 
    ✓ ua.ds 
    ✓ ua.psp 
    ✓ ua.psvita 
    ✓ ua.windowsphone 

  21 tests complete (15 ms)
```


## Contributing

- Kei FUNAGAYAMA - [@fkei](https://twitter.com/fkei) [github](https://github.com/fkei)
- Kazuma MISHIMAGI - [@maginemu](https://twitter.com/maginemu) [github](https://github.com/maginemu)

## Reference Projects

Projects that incorporate some of the source code UserAgent [zepto.js](http://zeptojs.com/)


## Copyright

CyberAgent, Inc. All rights reserved.

## LICENSE

@see : [LICENSE](https://raw.github.com/CyberAgent/beez-ua/master/LICENSE)

```
The MIT License (MIT)

Copyright © CyberAgent, Inc. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```

This library is forked from [zepto.js](http://zeptojs.com/) that is [MIT License](https://raw.github.com/madrobby/zepto/master/MIT-LICENSE)
