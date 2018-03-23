const submit = document.getElementById('submit');
let emptyArray = [];
function validations(e){
	e.preventDefault();
	let  name = document.getElementById('name').value;
	let  lastname = document.getElementById('lastname').value;
	let email = document.getElementById('email').value;
	let tel = document.getElementById('tel').value;
	let pass = document.getElementById('password').value;
	if(nameVal() && lastnameVal() && emailVal() && telVal() && pwd()){
		emptyArray.push(name);
		emptyArray.push(lastname);
		emptyArray.push(email);
		emptyArray.push(tel);
		emptyArray.push(pass);
		console.log(emptyArray);
		document.getElementById("myForm").reset();
		document.getElementById("myForm").className = 'hide';
		document.getElementById('review').className = '';
		document.getElementById("cname").innerHTML = emptyArray[0];
		document.getElementById("clastname").innerHTML = emptyArray[1];
		document.getElementById("cemail").innerHTML = emptyArray[2];
		document.getElementById("ctel").innerHTML = emptyArray[3];

	}
}
submit.addEventListener("click", validations);

function nameVal(){
	const errorMsgName = document.getElementById('errorName');
	let  name = document.getElementById('name').value;
	if(name.length >= 2){
		errorMsgName.innerHTML = "";
		
		return true;
	}
	else{
		errorMsgName.innerHTML = "Por favor introduce un nombre válido" ;
		return false;
	}
}
function lastnameVal(){
	const errorMsgLastName = document.getElementById('errorLastName');
	let  lastname = document.getElementById('lastname').value;
	if(lastname.length >= 2){
		errorMsgLastName.innerHTML = "";
		// emptyArray.push(lastname);
		return true;
	}
	else{
		errorMsgLastName.innerHTML = "Por favor introduce un apellido válido" ;
		return false;
	}
}
function emailVal(){
	const errorMsgEmail = document.getElementById('errorEmail');
	const regexEmail = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
	let email = document.getElementById('email').value;
	if (regexEmail.test(email)) {
	    errorMsgEmail.innerHTML = "";
		// emptyArray.push(email);
		return true;
	  }
	  else {
		errorMsgEmail.innerHTML = "Por favor introduce un email válido" ;
		return false;
	  }
}
function telVal(){
	const errorMsgTel = document.getElementById('errorTel');
	const regexTel = /^\d{9}$/;
	let tel = document.getElementById('tel').value;
	if(regexTel.test(tel)){
		errorMsgTel.innerHTML = "";
		// emptyArray.push(tel);
		return true;
	}
	else {
	    errorMsgTel.innerHTML = "Por favor introduce un telefono válido" ;
		return false;
	}
}
function pwd(){
	const errorMsgPwd = document.getElementById('errorPwd');
	const errorMsgPwd2 = document.getElementById('errorPwd2');
	// at least one number, one lowercase and one uppercase letter
    // at least six characters
	const regexPwd = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
	let pwd = document.getElementById('password').value;
	let pwd2 = document.getElementById('password2').value;
	if(regexPwd.test(pwd)){
		errorMsgPwd.innerHTML = "";
		if(pwd === pwd2){
			errorMsgPwd2.innerHTML = '';
			return true;
		}
		else{
			errorMsgPwd2.innerHTML = "Las contraseñas no coinciden" ;
			return false;
		}
	}
	else {
		errorMsgPwd.innerHTML = "Por favor introduce una contraseña válido" ;
		return false;
	}
}