var values = "";
function myFunction(){
	var buttons = document.getElementsByTagName('input');
	for (var  i = 0;i < buttons.length; i++) {
			values += buttons[i].value;
			//alert("hey");
	};

	document.getElementById('screen').innerHTML = values;
}



// function myFunction(){
// 	var buttons = document.getElementsByTagName('input').value;
// 	document.getElementById('screen').innerHTML = buttons;
// }

