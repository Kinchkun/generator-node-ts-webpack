module.exports = [
    {
        name: "<%= project_name %>",
        entry: "./main.ts",
        output: {
            filename: "./dist/main.js"
        },
        target: "node",
        module: {
            loaders: [
                { test: /\.ts$/, loader: 'ts-loader' }
            ]
        }
    }
]