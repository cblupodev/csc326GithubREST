var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + "98d16589f1940fc28c1f72434cd9da8b0711c16b";

var unityId = "cblupo";

function getYourRepos(userName)
{

	var options = {
		url: 'https://github.ncsu.edu/api/v3/user/repos',
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
	var options = {
	url: 'https://github.ncsu.edu/api/v3/repos/' + owner + '/' + repo + '/branches',
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

// https://developer.github.com/v3/repos/#create
function createRepo(repo) {
	var options = {
	url: 'https://github.ncsu.edu/api/v3/user/repos',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: {
			  "name": repo,
			  "description": "This is your first repository",
			  "homepage": "https://github.com",
			  "private": false,
			  "has_issues": true,
			  "has_wiki": false,
			  "has_downloads": true
		}
	};
	request(options, function (){});

}

// https://developer.github.com/v3/issues/#create-an-issue
function createIssue(owner, repo) {
	var options = {
		url: 'https://github.ncsu.edu/api/v3/repos/' + owner + '/' + repo + '/issues',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: { 
				"title": "Found a bug"
			  }
	};	
	request(options, function (){});
}

// https://developer.github.com/v3/repos/#edit
function enableWiki(owner, repo) {
	var options = {
		url: 'https://github.ncsu.edu/api/v3/repos/' + owner + '/' + repo,
		method: 'PATCH',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: { 
				"name": repo,
				"has_wiki": true,
			  }
	};		
	request(options, function (){});
}
