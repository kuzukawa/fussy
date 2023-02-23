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

process.stdin.resume();
process.stdin.setEncoding("utf8");

let reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("search word? : ", ans => {
  console.log(fuse.search(ans));
  reader.close();
});

