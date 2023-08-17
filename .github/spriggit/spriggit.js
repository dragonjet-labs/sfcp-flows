const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.resolve(process.cwd(), 'IronWarAxe.yaml'), `name: test-${Math.floor(Math.random() * 1000)}`);