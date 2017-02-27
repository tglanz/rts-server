import appModulePath from 'app-module-path';
import path from 'path';

(function(){
    console.log("Registering paths:")

    const serverPath = path.join(__dirname)
    console.log(` - server: ${serverPath}`)
    appModulePath.addPath(serverPath)

    const modulesPath = path.join(__dirname, "../modules")
    console.log(` - modules: ${modulesPath}`)
    appModulePath.addPath(modulesPath)
}())

// Use require and not import so the scrip will be loaded on runtime
require('babel-polyfill')
require('./server')