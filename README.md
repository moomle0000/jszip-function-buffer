jszip-function-buffer [![Build Status](https://api.travis-ci.org/Stuk/jszip.svg?branch=master)](http://travis-ci.org/Stuk/jszip) [![Code Climate](https://codeclimate.com/github/Stuk/jszip/badges/gpa.svg)](https://codeclimate.com/github/Stuk/jszip)
=====

[![Selenium Test Status](https://saucelabs.com/browser-matrix/jszip.svg)](https://saucelabs.com/u/jszip)

A library for creating, reading and editing .zip files with JavaScript, with a
lovely and simple API.

See https://stuk.github.io/jszip for all the documentation.

```javascript
const zip = await jszip.loadAsync(buffer)

const folder = await Object.keys(zip.files)

const file = await zip.file(folder[0]).async("nodebuffer")

const data = await file.toString()
return data;

/*
Results in a zip containing
Hello.txt
images/
    smile.gif
*/
```
License
-------

JSZip is dual-licensed. You may use it under the MIT license *or* the GPLv3
license. See [LICENSE.markdown](LICENSE.markdown).
