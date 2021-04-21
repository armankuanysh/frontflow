const path = require('path')
const core = require('./bin/index')

const context = path.resolve(__dirname, 'src')
const arg = process.argv[2]

core.get(arg)(context)
