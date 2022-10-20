

const grand_total = document.querySelector('.grand-total-price');

var items = Array.from(document.getElementsByClassName("asin-title")).map(x => x.innerText);
const name = document.querySelector('.displayAddressFullName').innerText

var iframe = document.createElement('iframe')
iframe.id = "react_content"
iframe.style="scrolling: 'NO'; position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"
	
document.body.appendChild(iframe);

function fadeOutEffect(target) {
    var fadeEffect = setInterval(function () {
        if (!target.style.opacity) {
            target.style.opacity = 1;
        }
        if (target.style.opacity > 0) {
            target.style.opacity -= 0.02;
        } else {
            clearInterval(fadeEffect);
            iframe.remove();
        }
    }, 200);
}


// `document.querySelector` may return null if the selector doesn't match anything.
if (grand_total) {

	var price = Number(grand_total.innerText.replace(/[^0-9.-]+/g,""));


	window.addEventListener('message',  function messageHandler(event) {
    
	    if (event.data == '') {

	    } else {
	    	console.log("got data")



	    	const subtotal_table = document.querySelector("#subtotals-marketplace-table")

		    var final_line = subtotal_table.rows[ subtotal_table.rows.length - 3 ].cloneNode(true);

		  	var total_line = subtotal_table.rows[ subtotal_table.rows.length - 2 ];

		   	var tip_line = total_line.cloneNode(true); 

		   	var final_total_line = total_line.cloneNode(true); 

		   	tip_line.cells[0].innerHTML = "<i>TIP 4 BEZOS:</i>";
		    tip_line.cells[0].style.color = '#ff3399'
		    tip_line.cells[1].style.color = '#ff3399'
		    final_total_line.cells[0].innerHTML = "Final Total:";
		    var spacer_line = subtotal_table.rows[ subtotal_table.rows.length - 1 ]
		    spacer_line.parentNode.insertBefore(tip_line, spacer_line);
		    spacer_line.parentNode.insertBefore(final_line, spacer_line);
		    spacer_line.parentNode.insertBefore(final_total_line, spacer_line);



		    if (event.data == "FADE OUT") {
		    	//iframe fade out

		    	tip_line.cells[1].innerHTML = "<i><3</i>";
		    	final_total_line.cells[1].innerHTML = "$" + price;

		    	fadeOutEffect(iframe)

		    } else {
		    	
		    	tip_line.cells[1].innerHTML = "<i>$" + event.data + "</i>";
		    	final_total_line.cells[1].innerHTML = "$" + (Number(event.data)+Number(price));

		    	iframe.remove();

		    	
		    	
			}
			window.removeEventListener('message',messageHandler);

		  }
	});



	var url = new URL(chrome.runtime.getURL('../index.html'))

	url.searchParams.append('price', price);
	url.searchParams.append('name', name);
	url.searchParams.append('purchase', items[0]);
	iframe.src = url.href;

}


