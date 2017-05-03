var gulp = require('gulp');
var exec = require('child_process').exec;
gulp.task('default',function(cb){
	exec('npm run firebase-deploy',function(err, stdout, stderr){
		console.log(err);
		console.log("stdout",stdout, "stderr",stderr);
	});
});