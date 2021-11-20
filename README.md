# md-linker

Node module to create a markdown link.

[![npm version](https://badge.fury.io/js/md-linker.svg)](https://badge.fury.io/js/md-linker)


What it does:
1. Fetches title from webpage at given url
2. Generates markdown link this this format: `[title](url)`
3. Copies link to system clipboard (ready for pasting into your markdown file 👻)

## Usage
```
node index.js [url]
```


## Example
```
$ node index.js google.com
```

Will generate and copy this markdown to your system clipboard:
```
[Google](google.com)
```
