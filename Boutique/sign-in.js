'use strict';

(function() {
	var users = [];
	var fetchUsers = function(url) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener('load', function() {
			var that = this;
			try {
				var response = JSON.parse(that.responseText);
				if (response && response.users) {
					users = response.users;
				}
			} catch (ex) {
				console.error(ex);
			}
		});
		oReq.open('GET', url);
		oReq.send();
	}

	// Test default API
	// fetchUsers('https://my-json-server.typicode.com/typicode/demo/db/');
	fetchUsers('http://my-json-server.typicode.com/bnsubeva/front-end-web/db/');

	var formLogin = document.getElementById('login-form');
	if (formLogin) {
		formLogin.addEventListener('submit', function() {
			event.preventDefault();

			var isValid = false;
			var username = document.getElementById('uname');
			var password = document.getElementById('psw');

			for (let user of users) {
				if ((user.username === username.value) && (user.password === password.value)) {
					isValid = true;
					break;
				}
			}

			if (!isValid) {
				document.getElementById('errors').innerText = 'Invalid credentials.';
			} else {
				document.getElementById('errors').innerText = '';
			}
		});
	}



})();
