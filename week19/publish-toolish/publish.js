/*
 * @Author: vivien
 * @Date: 2020-12-13 21:54:12
 * @Last Modified by: vivien
 * @LastEditTime: 2020-12-20 18:02:15
 */
let http = require('http');

let fs = require('fs');
let archiver = require('archiver');
let child_process = require('child_process');
let querystring = require('querystring');

// 1. 打开 https://github.com/login/oauth/authorize， 
// 3. 创建server,接受token，后点击发布

child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.ea49f970901fecc6`)

http.createServer(function(request, response){
    let query = querystring.parse(request.url.match(/^\/\?([\s\S]+$)/)[1])
    publish(query.token);
}).listen(8083);

function publish(token){
    let request = http.request({
        hostname: '127.0.0.1',
        port: 8082,
        method: 'POST',
        path: "/publish?token=" + token,
        headers: {
            "Content-Type": "application/octet-stream",
            // "Content-Length": stats.size
        }
    }, response => {
        console.log(response);
    })

    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
      });

    archive.directory('./sample/', false);

    archive.finalize();
    
    archive.pipe(request);
}

// fs.stat('./sample.html', (error, stats) => {
   /* let request = http.request({
        hostname: '127.0.0.1',
        port: 8082,
        method: 'POST',
        headers: {
            "Content-Type": "application/octet-stream",
            // "Content-Length": stats.size
        }
    }, response => {
        console.log(response);
    })
    
    // let file = fs.createReadStream('./sample.html');

    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
      });

    archive.directory('./sample/', false);

    archive.finalize();
    
    archive.pipe(request);

    
    // file.pipe(request);
    
    // file.on('end', () => request.end());
// })


// file.on('data', chunk => {
//     console.log(chunk.toString());
//     request.write(chunk);
// })

// file.on('end', chunk => {
//     console.log('read finished');
//     request.end(chunk);
// })
*/