const minify = require('@node-minify/core');
const htmlMinifier = require('@node-minify/html-minifier');

minify({
  compressor: htmlMinifier,
  input: './src/views/footer.html',
  output: './dist/footer-min.html',
});
