'use strict';

let duckDuckGoSearch = require('../page-objects/duckDuckGoSearch');

let page = ({duckDuckGoSearch});

When(/^they input (.*)$/, function(searchWord) {
  /** use a method on the page object which also returns a promise */
  return page.duckDuckGoSearch.performSearch(searchWord);
});
