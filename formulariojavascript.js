alert("Tus datos se envían automáticamente cuando todos los bordes de los campos son de color verde.");

const form = document.getElementById('form');
const servi = document.getElementById('servicios');
const basicos = document.getElementById('basicos');
const de = document.getElementById('de');
const la = document.getElementById('la');
const comunidad = document.getElementById('comunidad');
const agua = document.getElementById('agua');
const elec = document.getElementById('elec');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
 
});

function checkInputs() {
	// eliminar espacios en blanco
	const serviValue = servi.value.trim();
	const basicosValue = basicos.value.trim();
	const deValue = de.value.trim();
	const laValue = la.value.trim();
    const comunidadValue = comunidad.value.trim();
    const aguaValue = agua.value.trim();
    const elecValue = elec.value.trim();
	
	if(serviValue === '') {
		setErrorFor(servi, 'No puede dejar el campo en blanco.');
	} else {
		setSuccessFor(servi);
	}
	
	if(basicosValue === '') {
		setErrorFor(basicos, 'No puede dejar el campo en blanco.');
	} else {
		setSuccessFor(basicos);
	}
	
	if(deValue === '') {
		setErrorFor(de, 'No puede dejar el campo en blanco.');
	} else {
		setSuccessFor(de);
	}
	
	if(laValue === '') {
		setErrorFor(la, 'No puede dejar el campo en blanco.');
	} else {
		setSuccessFor(la);
	}
    if(comunidadValue === '') {
		setErrorFor(comunidad, 'No puede dejar el campo en blanco.');
	} else {
		setSuccessFor(comunidad);
	}
    if(aguaValue === '') {
		setErrorFor(agua, 'No puede dejar el campo en blanco.');
	} else {
		setSuccessFor(agua);
	}
    if(elecValue === '') {
		setErrorFor(elec, 'No puede dejar el campo en blanco');
	} else {
		setSuccessFor(elec);
	}
}



function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}






function cambia(n,r){
    if (r=="si"){
        document.getElementById(n).style.background="#99A3A4" 
    }else{
        document.getElementById(n).style.background=""
    }
}






