'use strict';

let duckDuckGoSearch = require('../page-objects/duckDuckGoSearch');

let page = ({duckDuckGoSearch});


Then(/^they should see some results$/, function() {
  /** return the promise of an element to the following then */
  return page.duckDuckGoSearch.searchResult();
});
