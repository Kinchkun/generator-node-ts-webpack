var Generator = require('yeoman-generator');
var glob = require('glob');
var exec = require("child_process").exec;

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
            const source = rawPath.replace(/PROJECT_NAME/, this.answers.project_name);
            this.fs.copyTpl(
                this.templatePath(rawPath),
                this.destinationPath(source),
                this.answers);
        }

        var files = glob.sync('**/*', {
            cwd: this.templatePath('.'),
            nodir: true
        });

        files.forEach(writeTemplate);
    }
    install() {
        this.npmInstall([
            "webpack",
            "typescript",
            "ts-loader",
            "optimist",
            "@types/optimist"
            ],
            {
                "save-dev": true
            },
            null,
            {
                cwd: this.answers.project_name
            });

            this.spawnCommandSync("git", ["init"], {
                cwd: this.answers.project_name
            });
            this.spawnCommandSync("git", ["add", "."], {
                cwd: this.answers.project_name
            });
            this.spawnCommandSync("git", ["commit", "-m", "init"], {
                cwd: this.answers.project_name
            });

    }
};