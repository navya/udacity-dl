var request = require('request'),
    $       = require('cheerio');

function parse(err, resp, html) {
    if (err) {
        console.log('Error');
    }

    var zipURLS = [];
    var parsedHTML = $.load(html);
    parsedHTML('a').map(function(i, link) {
        var href = $(link).attr('href');
        if(href.match('.zip')) {
            zipURLS.push(href);
        }
    });

    zipURLS.map(function(value, index) {
        console.log(value);
    });
}

var course = 'st095';
var domain = 'https://www.udacity.com/wiki/' + course + '/downloads';
request(domain, parse);
