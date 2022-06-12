function calculateTip(event) {	
	event.preventDefault();
	let cont = document.getElementById('cont').value;	
	let servicepessoas = document.getElementById('servicepessoas').value;
	let numOfquality = document.getElementById('quality').value;
	if(cont == '' | servicepessoas == 0){
	alert("Por favor, preencha os valores")
	return;
	}         

	if(numOfquality == "" | numOfquality <= 1) {
		numOfquality = 1;
	document.getElementById('totalpeople').style.display = "none"
	} 
	else {
	document.getElementById('totalpeople').style.display = "block"
	}

	let total = (cont * servicepessoas) / numOfquality;
	total = total.toFixed(2);
	document.getElementById('total').innerHTML = total;
	document.getElementById('totaltip').style.display = "block";
}

document.getElementById('totaltip').style.display = "none";
document.getElementById('totalpeople').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', calculateTip);
