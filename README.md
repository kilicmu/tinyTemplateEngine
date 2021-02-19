## tiny template engine

a weak template engine, and we can use it to render some simple text 😆

only use for study! 😅

### use example:
```js
const { readFileSync } = require('fs');
const { resolve } = require('path');
const { render } = require('src/index.js');
const http = require('http');
const mime = require('mime');

http.createServer(function (request, response) {
    const tmplPath = resolve(__dirname, '/src/tmpl.html');
    const tmpl = readFileSync(tmplPath, 'utf8');
    const data = { arr: [1, 2, 3, 4] };
    response.writeHead(200, { 'Content-Type': mime.getType(tmplPath) });
    response.end(render(tmpl, data));
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
```
