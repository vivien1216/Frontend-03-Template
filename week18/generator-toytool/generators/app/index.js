var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
    
    }
    async initPackage() {
        let answers = await this.prompt([{
          type    : 'input',
          name    : 'title',
          message : 'Your project title',
          default: this.appname,
        }]);

        const pkgJson = {
            "name": answers.title,
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
              "build": "webpack",
              "test": "mocha --require @babel/register",
              "coverage": "nyc mocha"
            },
            "author": "",
            "license": "ISC",
            "devDependencies": {
            },
            "dependencies": {
            }
        };
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        this.npmInstall(["vue"], { "save-dev": true});
        this.npmInstall(["webpack", "webpack-cli", "vue-loader", "vue-template-compiler",
        "copy-webpack-plugin", "vue-style-loader", "@babel/core","@babel/preset-env","@babel/register",
        "@istanbuljs/nyc-config-babel","babel-plugin-istanbul","mocha","nyc","babel-loader",
        "css-loader"], { "save-dev": false});
        
        this.fs.copyTpl(
            this.templatePath('simple-test.js'),
            this.destinationPath('test/simple-test.js'),
        );
        this.fs.copyTpl(
            this.templatePath('.babelrc'),
            this.destinationPath('.babelrc'),
        );
        this.fs.copyTpl(
            this.templatePath('.nycrc'),
            this.destinationPath('.nycrc'),
        );
        this.fs.copyTpl(
            this.templatePath('HelloWorld.vue'),
            this.destinationPath('src/HelloWorld.vue'),
        );

        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js'),
        );

        this.fs.copyTpl(
            this.templatePath('main.js'),
            this.destinationPath('src/main.js'),
        );

        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('src/index.html'),
            {title: answers.title}
        );
    }
}