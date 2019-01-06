const path = require('path');
const fs = require('fs');
const solc = require('solc');

const prosperPath = path.resolve(__dirname , 'contracts', 'prosper.sol')
const source = fs.readFileSync(prosperPath, 'utf8');
module.exports = solc.compile(source, 1).contracts[':Prosper'];
