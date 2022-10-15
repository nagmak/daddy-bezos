var url_name = chrome.runtime.getURL('../index.html')

const iframe = document.createElement('iframe')

var div = document.createElement('div')

div.id = "plzwork"

div.style.position = 'fixed';
div.style.top = '0';
div.style.width = '100%';   
div.style.height = '100%';



div.appendChild(iframe)
iframe.src = url_name
document.body.appendChild(div);