import articleTitle from 'article-title';
import axios from 'axios';
import prepend from 'prepend-http';
import clipboard from 'clipboardy';

const args = process.argv;

const url = args[2];

const config = {
  timeout: 3000,
}
const instance = axios.create(config);

const result = await instance.get(prepend(url)).catch(e => {
  console.log('Error fetching url:', e);
});

const html = result.data;
const titleRaw = articleTitle(html);
console.log('Title:', titleRaw || '(Not found)');

const title = titleRaw || url;
const md = `[${title}](${url})`;
console.log('Markdown link:', md);
console.log('Copied to clipboard! 👻')

clipboard.writeSync(md);
