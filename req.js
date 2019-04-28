const request = require('request');

request("https://www.naver.com", function(err, res, body) {
    if(err != null) {
        console.log(err);
        return;
    }
    console.log(body);
});