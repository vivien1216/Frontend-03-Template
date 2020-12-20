/*
 * @Author: vivien
 * @Date: 2020-12-13 21:51:42
 * @Last Modified by: vivien
 * @LastEditTime: 2020-12-20 20:25:20
 */
let http = require('http');
let https = require('https');
let querystring = require('querystring');
// let fs = require('fs');

// 2.auth路由：接受code，用client_id和client_secret换token

function auth(request, response) {
   let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+$)/)[1])
   getToken(query.code, function(info){
      response.write(`<a href="http://localhost:8083?token=${info.access_token}">publish</a>`);
      response.end();
   })
}

function getToken(code, callback) {
    let request = https.request({
       hostname: 'github.com',
       path: `/login/oauth/access_token?code=${code}&client_id=Iv1.ea49f970901fecc6&client_secret=2fc5186dddd213a0e01190981c74b5cc69861de9`,
       port: 443,
       method: 'POST',
    }, function(response){
       let body = '';
       response.on('data', chunk => {
           body += (chunk.toString());
       })
       response.on('end', chunk => {
         callback(querystring.parse(body));
       })
    })
    request.end();
}
// 4.publish路由：用token获取用户信息，检查权限，接受发布
function publish(request, response) {
   let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+$)/)[1]);
   getUser(query.token,info => {
      if(info.name ==='vivien16'){
         request.pipe(unzipper.Extract({ path: '../server/public/' }))
         request.on('end', function(){
             response.end('success!');
         })
      }
   })
   // let outfile = fs.createWriteStream('../server/public/tmp.zip');
   // request.pipe(outfile);
   // request.pipe(unzipper.Extract({ path: '../server/public/' }))
}

function getUser(token,callback){
   let request = https.request({
      hostname: 'api.github.com',
      path: `/user`,
      port: 443,
      method: 'GET',
      headers: {
         Authorization: `token ${token}`,
         "User-Agent": "publish-server"
      }
   }, function(response){
      let body = '';
      response.on('data', chunk => {
          body += (chunk.toString());
      })
      response.on('end', chunk => {
        callback(querystring.parse(body));
      })
   })
   request.end();
}


let unzipper = require('unzipper');

http.createServer(function(request, response){
   if(request.url.match(/^\/auth\?/)){
      return auth(request, response)
   }

   if(request.url.match(/^\/publish\?/)){
      return publish(request, response)
   }
   //  console.log('request');

   // request.pipe(unzipper.Extract({ path: '../server/public/' }))
   //  let outfile = fs.createWriteStream('../server/public/tmp.zip');
   //  request.pipe(outfile);
   // request.on('data', chunk => {
   //    console.log(chunk);
   //    outfile.write(chunk);
   // })

   // request.on('end', () => {
   //    outfile.end();
   //    reqponse.end("Success");
   // })
}).listen(8082);