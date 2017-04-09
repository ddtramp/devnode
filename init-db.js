require('babel-core/register')({
    presets: ['stage-3']
});

const model = require('./model.js');
model.sync(function () {
    console.log('init db is ok ...');
    process.exit(0);
});

