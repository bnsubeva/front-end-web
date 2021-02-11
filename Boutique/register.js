'use strict';

(function() {
	var validate = function() {
		var password = document.getElementById('psw');
		var passwordRepeat = document.getElementById('psw-repeat');
		var email=document.getElementById('email');
	
		 if (password.value != passwordRepeat.value) {
			return false;
		 }
		 
		 if ( !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))) {
			 return false;
		 }
	
		var pswd = password.value;
		if (pswd && pswd.length < 6 || !/[A-Z]/.test(pswd) || !/[0-9]/.test(pswd) || !/[!@#$%^&]/.test(pswd)) {
			return false;
		}
		
		return true;
	};

	var form = document.getElementById('register-form');
	if (form) {
		form.addEventListener("submit", function(event) {
			event.preventDefault(); 
			if (validate()) {
				document.getElementById("errors").innerText = "Registered Succesfully!";
			} else {
				document.getElementById("errors").innerText = "Registration is failed!";
			}
		});
	}
})();
