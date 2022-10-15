var url_name = chrome.runtime.getURL('../index.html')

var iframe = document.createElement('iframe')
iframe.src = url_name

var div = document.createElement('div')

var total = document.getElementsByClassName('grand-total-price')[0]
var total_text = total.innerText
var price = Number(total_text.replace(/[^0-9.-]+/g,""));

var price_option_1 = price*1.15;
var price_option_2 = price*1.69;
var price_option_3 = price*4.20;

div.id = "plzwork"

div.style.position = 'fixed';
div.style.inset = '0';
div.style.overflow = 'hidden';
iframe.style.width = '100%';
iframe.style.right = '0';

iframe.style.height = '100vh';

div.appendChild(iframe)

document.body.appendChild(div);
