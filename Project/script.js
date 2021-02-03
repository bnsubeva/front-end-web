'use strict';

(function() {
	var validState = false;
	var form = document.getElementById("register-form");
	var formLogin=document.getElementById("login-form");
	var validate = function(type, value) {
		switch (type) {
			case "uname":
				 if (value.length < 8) {
					return false; 
				 }
			break;
			case "psw":
			    if (value.length < 6 || !/[A-Z]/.test(value) || !/[0-9]/.test(value) || !/[!@#$%^&]/.test(value)) {
					return false;
				}
			break;
		}
		
		return true;
	};

	if (form) {
		form.addEventListener("input", function (event){
			var target = event.target;
			validState = validate(target.name, target.value);
		});
	
		form.addEventListener("submit", function() {
			event.preventDefault();
			if (validState) {
				document.getElementById("errors").innerText = "Регистрацията е успешна";
			} else {
				document.getElementById("errors").innerText = "Регистрацията е неуспешна";
			}	
		});
	}
	
	if (formLogin) {
		formLogin.addEventListener("input", function (event){
			var target = event.target;
			validState = validate(target.name, target.value);
		});
		
		formLogin.addEventListener("submit", function() {
			event.preventDefault();
			if (validState) {
				document.getElementById("errors").innerText = "Регистрацията е успешна";
				
			} else {
				document.getElementById("errors").innerText = "Регистрацията е неуспешна";
			}	
		});
	}
	
	 
})();