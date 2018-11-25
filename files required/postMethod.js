'use strict';
let apiData = require('../shared-objects/apiData');
let shared = ({apiData});
let log = global.log;
let reqJson=require('../shared-objects/securities.json');
let microresp=require('./serviceStubs');

let postres; 
let getresp;
var parseResp;

module.exports = {
/**
   * making a call to the Api
   */
// if dependant webservice is not available or its not developed completl
  postCall: async function () {
   
    //post call to a webservice
    // let endPoint = (envConfig.url.api_base_Post_url + shared.apiData.url.baseUrlPost);
    // log.info(endPoint);
    // let body = shared.apiData.body;
    // body.name = parseResp;
    // postres = await helpers.apiCall(endPoint,'POST',body);

    
    var postRespjo = microresp.apimicrocall();

   // only for nock , can skip in case of actual microservice call
    let respBody = postRespjo.interceptors[0]["body"];

    //check number of accounts
    let noOfAccounts=JSON.parse(respBody).Account.length;
    log.info("noOfAccounts:"+noOfAccounts);
    let secAccountCount=reqJson.Account.length;
    log.info("secAccountCount:"+secAccountCount);
    expect(secAccountCount).to.equal(noOfAccounts);

   //check username
    let userName=JSON.parse(respBody).username;
    log.info("userName:"+userName);
    let secUserName=reqJson.name;
    log.info("secUserName:"+secUserName);
    expect(userName).to.equal(secUserName);

    //check token
    let token=JSON.parse(respBody).token;
    log.info("userName:"+token);
    let secToken=reqJson.cp_code;
    log.info("secUserName:"+secToken);
    expect(token).to.equal(secToken);

    //check Account name and Account Balance
    let AccountList=JSON.parse(respBody).Account;
    log.info("userName:"+AccountList);
    let secAccountList=reqJson.Account;
    log.info("secUserName:"+secAccountList);

    for (let i = 0; i < AccountList.length; i++) {
      let accountName = AccountList[i].bankAccname;
      let accountBal = AccountList[i].bankBalance;
      log.info("accountName"+accountName);
      log.info("accountBal"+accountBal);
      let secaccountName = reqJson.Account[i]["acount_name"];
      let secaccountBal = reqJson.Account[i]["balance"];
      log.info("secaccountName"+secaccountName);
      log.info("secaccountBal"+secaccountBal);
      expect(accountName).to.equal(secaccountName);
      expect(accountBal).to.equal(secaccountBal);
  }
   },

/**
   * Getting the Response Timing
   */
  postresTime: async function () {
    log.info(postres.timings.response);
  },

  /**
   * Getting the Status Code
   */
  poststaCode: async function () {
    driver.pause(SHORT_DELAY_MILLISECOND);
    expect(postres.statusCode).to.equal(201);
    log.info(postres.statusCode);
  },

  postcontApi: async function () {
    driver.pause(SHORT_DELAY_MILLISECOND);
    log.info(postres.body);
  },




  
};


