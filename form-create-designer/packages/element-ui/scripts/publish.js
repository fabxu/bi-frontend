/** Use the latest version from package.json to publish */

const child_process = require("node:child_process")
const pkg = require('../package.json')
const version = pkg.version

child_process.execSync(`yarn publish --new-version ${version}`)
