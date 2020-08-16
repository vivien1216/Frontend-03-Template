/*
 * @Author: vivien
 * @Date: 2020-08-16 16:59:17
 * @Last Modified by: vivien
 * @LastEditTime: 2020-08-16 17:06:12
 */
const http = require('http');

http.createServer((request, response) => {
    let body = [];
    request.on('error',(err) => {
       console.log(err);
    }).on('data', (chunk) => {
       body.push(chunk.toString());
    }).on('end', ()=>{
       body = Buffer.concat(body).toString();
       console.log('body', body);
       response.writeHead(200, {'Content-Type': 'text/html'});
       response.end(' Hello world\n');
    })
}).listen(8088);

console.log('server started');