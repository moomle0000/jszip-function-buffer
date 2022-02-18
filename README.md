jszip-function-buffer [![Build Status](https://api.travis-ci.org/Stuk/jszip.svg?branch=master)](http://travis-ci.org/Stuk/jszip) [![Code Climate](https://codeclimate.com/github/Stuk/jszip/badges/gpa.svg)](https://codeclimate.com/github/Stuk/jszip)
=====

[![Selenium Test Status](https://saucelabs.com/browser-matrix/jszip.svg)](https://saucelabs.com/u/jszip)

A library for creating, reading and editing .zip files with JavaScript, with a
lovely and simple API.

See https://raw.githubusercontent.com/moomle00000/jszip-function-buffer/main/index.js for all the documentation.

```javascript
const fetch = require('cross-fetch');
const jszip = require("jszip");

const zip = await jszip.loadAsync(buffer)

const folder = await Object.keys(zip.files)

const file = await zip.file(folder[0]).async("nodebuffer")

const data = await file.toString()

```

get data from url zip file

```javascript
async function downloadFile(url) {
    const response = await fetch(url);

    const data = await response.arrayBuffer();

    return data

}

```

function get data text file or other file extract from zip file

```javascript
async function jszipe(buffer){
    const zip = await jszip.loadAsync(buffer)

    const folder = await Object.keys(zip.files)

    const file = await zip.file(folder[0]).async("nodebuffer")

    const data = await file.toString()
    return data;
}


```


License
-------

JSZip is dual-licensed. You may use it under the MIT license *or* the LM
license. See [LICENSE](LICENSE).
