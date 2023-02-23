const Fuse = require('fuse.js');

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: [
    "title",
    "author.firstName"
  ]
};

const list = require('./list.json');
const fuse = new Fuse(list, options);

// Change the pattern
const pattern = "DaVinch"

console.log(fuse.search(pattern))
