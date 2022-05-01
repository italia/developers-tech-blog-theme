const fs = require('fs');
const templateEngine = require('mustache');

const readFile = (filePath) => {
    return fs.readFileSync(filePath, {encoding:'utf8', flag:'r'})
}
const data = {
  cssStyle: readFile('./dist/bundle.css'),
  jsScript: readFile('./dist/bundle.js')
};
const output = templateEngine.render(readFile('./src/template.html'), data);
fs.writeFileSync('./dist/output.html', output);