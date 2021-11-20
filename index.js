import articleTitle from 'article-title';
import axios from 'axios';
import prepend from 'prepend-http';
import clipboard from 'clipboardy';

const args = process.argv;

const url = args[2];

const result = await axios.get(prepend(url)).catch(e => {
  console.log('Error fetching url:', e);
});

const html = result.data;
const title = articleTitle(html);
console.log('Title:', title);

const md = `[${title}](${url})`;
console.log('Markdown link:', md);
console.log('Copied to clipboard! 👻')

clipboard.writeSync(md);
