/*
 * Copyright (c) 2014 Srijan R Shetty <srijan.shetty+code@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* Check for the course */
var course = '';
if (process.argv[2]) {
    course = process.argv[2].toLowerCase();
    console.log('Generating URL list for: ' + course);
} else {
    console.log('Course Number missing, exiting');
    process.exit(1);
}

var request = require('request'),
    $       = require('cheerio');

function parse(err, resp, html) {
    if (err) {
        console.log(err);
    }

    var zipURLS = [];
    var parsedHTML = $.load(html);
    parsedHTML('a').map(function(i, link) {
        var href = $(link).attr('href');
        if(href.match('.zip')) {
            zipURLS.push(href);
        }
    });

    zipURLS.map(function(value) {
        console.log(value);
    });
}

var domain = 'https://www.udacity.com/wiki/' + course + '/downloads';
request(domain, parse);
