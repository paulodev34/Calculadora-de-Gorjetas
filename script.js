function calculateTip(event) {
	event.preventDefault();
	let cont = document.getElementById('cont').value;
	let quality = document.getElementById('quality').value;
	let pessoas = document.getElementById('pessoas').value;
 	if(cont == '' | quality == 0){
 	alert("por favor preencha os valores")
 	return;
 	}

 	if (pessoas == "" | pessoas <= 1) {
 		pessoas = 1;
 	document.getElementById('totalpeople').style.display = "none"
 	}
 	else{
 	document.getElementById('totalpeople').style.display = "block"
 	}

 	let total = (cont * quality) / forminput;
 	total = total.toFixed(2);
 	document.getElementById('total').innerHTML = total;
 	document.getElementById('Valor').style.display = "block";
}


document.getElementById('Valor').style.display = "none";
document.getElementById('totalpeople').style.display = "none";

document.getElementById('tips').addEventListener('submit', calculateTip);