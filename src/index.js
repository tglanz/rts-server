import appModulePath from 'app-module-path';
import path from 'path';

(function(){
    console.log("Registering paths:")

    const srcPath = path.join(__dirname)
    console.log(` - src: ${srcPath}`)
    appModulePath.addPath(srcPath)
}())

// Use require and not import so the scrip will be loaded on runtime
require('babel-polyfill')
require('./server')