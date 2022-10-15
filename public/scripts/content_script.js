var url_name = chrome.runtime.getURL('../index.html')

var iframe = document.createElement('iframe')

var div = document.createElement('div')

div.id = "plzwork"

div.style.position = 'fixed';
div.style.inset = '0';
div.style.overflow = 'hidden';
iframe.style.width = '100%';
iframe.style.right = '0';

iframe.style.height = '100vh';





div.appendChild(iframe)
iframe.src = url_name
document.body.appendChild(div);