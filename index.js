var split = require('split')
  , through = require('through')
odd = true

process.stdin
    .pipe(split())
    .pipe(through(function (line) {
        var line = line.toString()
        
        // check for odd numbered line
        if (odd){
            line = line.toLowerCase()
        } 
        else {
            // uppercase incoming even lines 
            line = line.toUpperCase()
        }
        odd = !odd
        return console.log(line)
    }))
    .pipe(process.stdout)