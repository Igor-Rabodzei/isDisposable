# isDisposable email domains

A database of free and [disposable](http://en.wikipedia.org/wiki/Disposable_email_address)
email domains and a handy Node.js module for querying it.

Use the Node.js module or access the files in the `./data` directory and parse
with your language of choice.

In an effort to create the most up-to-date list of domains, the database can be
synchronized with various lists from around the web. You can also add new
domains directly by opening a pull request.

## Database

There are three key data files in this project:

- [free.txt]() contains a list of domains that are known to provide free email service
- [disposable.txt]() contains a list of domains that are known to provide disposable email service
- [blacklist.txt]() contains a list of domains that this project will refuse to add to either list

Domains may only be a member of one list.

## Node

### Install

```
npm install --save freemail
```

