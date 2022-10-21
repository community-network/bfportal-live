'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    popup: PATHS.src + '/popup.js',
    experienceContentScript: PATHS.src + '/experienceList/contentScript.js',
    experienceEditorScripts: PATHS.src + '/experienceEditor/contentScript.js',
    background: PATHS.src + '/background.js',
  },
});

module.exports = config;
