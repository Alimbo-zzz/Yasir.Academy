const path = require('path');

const createPath = (page)=> path.resolve(__dirname, '../Front-end', `${page}/index.html`)

module.exports = createPath;
