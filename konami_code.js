const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(event) {
  	const key = parseInt(event.location || event.which)

  	if(key === code[index]) {
  	  index++;
  	 debugger;
  	  if(index === code.length) {
  	  	
  	    window.alert("Hurray!")
  		index = 0;
  		} 
  	} else {
  		  index = 0;
  		}
  })
}

