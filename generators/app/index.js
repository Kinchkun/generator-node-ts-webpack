var Generator = require('yeoman-generator');
var glob = require('glob');

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type    : "input",
                name    : "project_name",
                message : "The name of your project?"
            },
        ]).then(answers => {
            this.answers = answers;
        })
    }

    writing() {
        var writeTemplate = rawPath => {
            source = rawPath.replace(/PROJECT_NAME/, this.answers.project_name);
        }

        var files = glob.sync('**/*', {
            cwd: this.templatePath('.'),
            nodir: true
        });

        files.forEach(file => {

        });
    }
};