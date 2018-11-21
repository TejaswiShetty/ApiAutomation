'use strict';

let postMethod = require('../page-objects/postMethod');
let page = ({postMethod});

Given('That I make a POST call to an endPoint', function () {
  return page.postMethod.postCall();
})

When(/^That I capture the POST response time$/, function () {
  return page.postMethod.postresTime();
});

Then(/^For the request I expect status code of '(\d+)'$/, function (stcode) {
  return page.postMethod.poststaCode(stcode);
});

Then(/^I return the content of the Post API$/, function () {
  return page.postMethod.postcontApi();
});
  


