'use strict';
let apiData = require('../shared-objects/apiData');
let shared = ({apiData});
let log = global.log;

let postres;


module.exports = {
/**
   * making a call to the Api
   */
  postCall: async function () {
    let endPoint = (envConfig.url.api_base_Post_url + shared.apiData.url.baseUrlPost);
    log.info(endPoint);
    let body = shared.apiData.body;
    log.info(body);
    postres = await helpers.apiCall(endPoint,'POST',body);
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
