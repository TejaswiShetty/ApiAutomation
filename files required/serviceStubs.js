 
'use strict';
const fs = require('fs');
let log = global.log;
var assert = require('assert');
var nock = require('nock');
module.exports = {
// //stubbing post requests , response from json file
// var posrrespjojs = nock('http://myapp.iriscouch.com')
//                 .get('/')
//                 .replyWithFile(200, __dirname + '/replies/user.json', { 'Content-Type': 'application/json' });

//stubbing post requests , response as json object

apimicrocall: function (){
var postRespjo  = nock('http://abc.com/securities')
               .post('/post', { username: 'pgte'})
               .reply(200, {
                username: 'amulya shetty',
                token: '873246272adnj34ian',
                Account : [
                    {
                        'bankAccname':'Amulya',
                        'bankBalance':"5000"
                    },
                    {
                        'bankAccname':'Tejaswi',
                        'bankBalance':'10000'
                      },
                    {
                        'bankAccname':'Shetty',
                        'bankBalance':'15000'  
                    }  
            ]
               });
            //   log.info("Resp"+postRespjo.interceptors[0]["body"]);
return postRespjo;
            },
            
//stubbing get requests , response as json object
// var getresp = nock('http://abc.com/securities')
//     .get('/get')
//     .reply(200, {
//       username: 'pgte',
//       token: '873246272adnj34ian',
//       name: 'morpheus'
//      });
        };
     