import appModulePath from 'app-module-path';
import path from 'path';

(function(){
    console.log("Registering paths:")

    const srcPath = path.join(__dirname)
    console.log(` - src: ${srcPath}`)
    appModulePath.addPath(srcPath)
}())

// Use require and not import so the scrip will be loaded on runtime
try {
    require('babel-polyfill')
} catch (error){
    console.log("Failed to load babel-polyfill, are you running nodemon?")
}

require('./server')