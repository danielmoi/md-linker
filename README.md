# md-url

Node module to create a markdown link.

1. Fetch title from webpage at given url
2. Generate markdown link this this format: `[title](url)`
3. Copy link to system clipboard (ready for pasting into your markdown file 👻)

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
