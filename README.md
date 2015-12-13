Petset UI
============

Building
--------
Steps to build front end code:

1. Make sure [nodejs](http://nodejs.org) is installed.
2. Run the build script at `src/static/build.sh`

If you are just using the app, and not testing and developing it, **you do not need to do more than this.**

Running all tests (ToDo)
-----------------
To run all tests:

1. Make sure [nodejs](http://nodejs.org) is installed.
2. Run the test script at `src/static/test.sh`

Code coverage
-------------
Code coverage reports are generated on each test run at `src/static/coverage`.



Requirements and setup
-----------------------
The only dependency is [nodejs](http://nodejs.org), make sure it is installed.

Run `npm install` to install all node dependencies.

Executables like `bower` and `grunt` must be run from the `node_modules/.bin` directory. So instead of running `bower update`, you would run `node_modules/.bin/bower update`.

To bypass this, node packages can be installed globally. For bower, run `sudo npm install -g bower`. After this, the `bower` script should be in your `PATH` and you should be able to run a command like `bower update` directly. For grunt run `sudo npm install -g grunt-cli`.

Components and dependencies
---------------------------
Node modules are not checked in, as they are only used for development. Bower components, however, are checked in as they are required to use the webapp. To update bower components run `bower update`

When adding a bower component, make sure it is also added to the `bower.json` file, by running `bower install --save packagename`.

Similarly, for a node module, run `npm install --save-dev modulename`.

Workflow
--------
A `grunt watch` process should be kept running during development. This will automatically take care of the following tasks when relevant files are modified:

- CSS compilation from Less, and autoprefixing.
- CSS livereload
- Automatic documentation generation

You can also livereload to automatically refresh CSS changes in your browser without manually reloading the page. Install a livereload browser extension and enable it in the browser window where you're viewing the site.

Unit tests should be run continuously with `grunt test:start`. This will automatically run tests on any file modifications.

CSS
---
[Less](http://lesscss.org/) is used as a precompiler for css. Less files are located in `app/less`. CSS is also postprocessed using [autoprefixer](https://github.com/postcss/autoprefixer). **Browser prefixes do not have to be added into the source CSS, autoprefixer will take care of this.** The `grunt css` task will take care of compiling LESS and postprocessing CSS. During normal development, however, use `grunt watch` instead.


Documentation
-------------
Code is documented using a variation of `jsdoc` called `ngdoc`. Documentation files can be built with `grunt ngdocs`. To view the documentation, run `grunt serve:docs` and then view the docs at [http://localhost:9000](http://localhost:9000)
