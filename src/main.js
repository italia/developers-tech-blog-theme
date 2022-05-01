import './main.scss'
import footer from './views/footer.html'

document.head.innerHTML += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-italia@1.6.2/dist/css/bootstrap-italia.min.css">';
document.addEventListener("DOMContentLoaded", function(){
    const footerElement = document.getElementsByTagName("footer")[0]
    footerElement.classList.add("bd-footer", "text-muted")
    footerElement.style.cssText += "background-color:#3e5266;text-align: left;"
    footerElement.innerHTML = footer;
})