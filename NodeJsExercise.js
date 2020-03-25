var https = require("https");
var username = 'Ignacio-Boada';

var options = {
    host: 'api.github.com',
    path: '/users/' + username + '/repos',
    method: 'GET',
    headers: { 'user-agent': 'node.js' }
};


var request = https.request(options, function (response) {
    var body = '';
    response.on("data", function (str) {
        body += str.toString('utf8');
    });

    response.on("end", function () {
        var countRepos = JSON.parse(body).length;
        if (countRepos == 0) console.log("No repositories");
        else if (countRepos == 3) console.log("There are three repositories");
        else if (countRepos > 3) console.log("There are a lot of repositories");
    });
});

request.on('error', error => {
    console.error("I cannot connect to the server")
})

request.end();