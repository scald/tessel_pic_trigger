var express = require('express');
var app = express();
var exec = require('exec');

app.get("/", function(req, res) {
	exec(['tessel','run','camera.js','--upload-dir','.'], function(err,out,code){
		if (err instanceof Error) {
			throw err;
		}
		process.stdout.write(out);
		process.stderr.write(err);

	});
		res.send("OK");

});

app.listen(3000);