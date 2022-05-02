import './main.scss'
import footer from './views/footer.html'
import './globals.js'
import 'svgxuse/svgxuse.js'
import 'bootstrap-italia/src/js/plugins/fonts-loader.js'

document.head.innerHTML += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-italia@1.6.2/dist/css/bootstrap-italia.min.css">';
document.addEventListener("DOMContentLoaded", function(){
    const footerElement = document.getElementsByTagName("footer")[0];
    footerElement.classList.add("bd-footer", "text-muted");
    footerElement.innerHTML = footer;
})