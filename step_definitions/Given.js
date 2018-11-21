'use strict';

let searchData = require('../shared-objects/searchData');

let shared = ({searchData});

Given(/^The user arrives on the duckduckgo search page$/, function() {
  return helpers.loadPage(shared.searchData.url, 10);
});

