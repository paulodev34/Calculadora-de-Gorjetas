function calculateTip(event) {	
	event.preventDefault();
	let cont = document.getElementById('cont').value;	
	let quality = document.getElementById('quality').value;
	let mumOfpessoas = document.getElementById('pessoas').value;
	if(cont == '' | quality == 0){
	alert("Por favor, preencha os valores")
	return;
	}         

	if(mumOfpessoas == "" | mumOfpessoas <= 1) {
		mumOfpessoas = 1;
	document.getElementById('totalpeople').style.display = "none"
	} 
	else {
	document.getElementById('totalpeople').style.display = "block"
	}

	let total = (cont * quality) / mumOfpessoas;
	total = total.toFixed(2);
	document.getElementById('total').innerHTML = total;
	document.getElementById('totaltip').style.display = "block";
}


document.getElementById('totalpeople').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', calculateTip);
