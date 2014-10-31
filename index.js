var through = require('through')

var tr = through(function write (buff) {
    // uppercase incoming words 
    this.queue(buff.toString().toUpperCase())
})

process.stdin.pipe(tr).pipe(process.stdout)