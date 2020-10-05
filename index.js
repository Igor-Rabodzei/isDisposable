const fs = require('fs');
const tldjs = require('tldjs');

const disposable = fs.readFileSync(__dirname + '/data/disposable.txt').toString().split('\n');
const blacklist = fs.readFileSync(__dirname + '/data/blacklist.txt').toString().split('\n');
const free = fs.readFileSync(__dirname + '/data/free.txt').toString().split('\n').concat(disposable);

const getDomain = (email) => {
  if (typeof email !== 'string') throw new TypeError('email must be a string');
  return tldjs.getDomain(email.split('@').pop());
}

const isFree = (email) => free.indexOf(getDomain(email)) !== -1;
const isDisposable = (email) => disposable.indexOf(getDomain(email)) !== -1
const isBlackList = (email) => blacklist.indexOf(getDomain(email)) !== -1

const validate = (email) => {
  const domain = getDomain(email)
  return {
    disposable: isDisposable(domain),
    free: isFree(domain),
    blackList: isBlackList(domain)
  }
}

module.exports = {
  isFree,
  isDisposable,
  isBlackList,
  validate
};