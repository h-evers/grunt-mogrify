module.exports = function (grunt) {

    "use strict";

    var exec = require("child_process").exec,
        path = require("path");

    grunt.registerMultiTask("mogrify", "resize canvas & center image", function () {

    // It's an async task so make sure Grunt knows this
    var done = this.async(),
        defaults = {
		  gravity: 'center',
          background: 'white',
          dimensions: '600x600'
		},
        options = {};

    // Configuration
    Object.keys(defaults).forEach(function (option) {
      if (this.data.options && this.data.options[option] !== undefined) {
        options[option] = this.data.options[option];
      } else {
        options[option] = defaults[option];
      }
    }, this);

	var files = this.data.files;
    // Test output directory (ImageMagick errors if it doesn't exist)
    if (!grunt.file.exists(files.dest)) {
      grunt.warn('Target directory does not exist: '+files.dest);
    }
    
	// Iterate over all specified file groups.
    files.source.forEach(function (dir) {
      var fls=grunt.file.expand(dir);
      fls.forEach(function (file) {

        var dest = path.join(files.dest,file.substr(file.lastIndexOf('/')));

        // Execute the ImageMagick montage tool
        //grunt.warn("mogrify -gravity " + gravity + " -background " + background + " -extent " + dimensions + " -write " + dest + " " + file);
        exec("mogrify -gravity " + options.gravity + " -background " + options.background + " -extent " + options.dimensions + " -write " + dest + " " + file, function (err) {
          done();
        });
      });
    });
  });

};