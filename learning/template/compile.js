const fs = require('fs');
const path = require('path');
const pug = require('pug');


const compileFunction = pug.compileFile('template.pug', { doctype: 'html'})
const dir = path.dirname(__dirname)
console.log(compileFunction({
    arr: ['world', 'peace', 'base']
}))