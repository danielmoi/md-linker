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
console.log('title:', title);

const md = `[${title}](${url})`;
console.log('md:', md);

clipboard.writeSync(md);
