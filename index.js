import fs from 'node:fs';
import readline from 'node:readline';
import process from 'node:process';
import Fuse from 'fuse.js';

const options = {
  // Options for Fuse.js
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
    'title',
    'author.firstName',
  ],
};

const list = JSON.parse(fs.readFileSync('./list.json', {encoding: 'utf8'}));
const fuse = new Fuse(list, options);

process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('search word? : ', ans => {
  console.log(fuse.search(ans));
  reader.close();
});

