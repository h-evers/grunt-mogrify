grunt-mogrify
=============

Use Imagemagick's 'mogrify' cli command to change image canvas dimensions.

# Dependency

You have to have Imagemagick installed!

# Grunt Configuration

```sh
    // 600x600
    'mogrify':{
      dev:{
        files:{
          source:['source_folder/*.jpg'],
          dest:'./'
        },
        options: {
          dimensions: '600x600'
        }
      }
    },
```

## Options

```sh
	dimensions
	gravity: see http://www.imagemagick.org/script/command-line-options.php#gravity
	background: see http://www.imagemagick.org/script/command-line-options.php#background
```
