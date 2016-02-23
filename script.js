var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + "8d431c72417c7640f7ef8029e0920e5dc16ac89f";

var unityId = "cjparnin";

getYourRepos(unityId);

function getYourRepos(userName)
{

	var options = {
		url: 'https://github.ncsu.edu/api/v3/users/' + "cblupo" + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}

function listBranches(owner,repo)
{
	
}
