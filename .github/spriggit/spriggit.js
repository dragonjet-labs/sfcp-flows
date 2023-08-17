const fs = require('fs');
const path = require('path');

console.log('Processing ESP/ESM file', process.argv[2]);

fs.writeFileSync(path.resolve(process.cwd(), 'IronWarAxe.yaml'), `name: test-${Math.floor(Math.random() * 1000)}`);