'use strict';

(function() {	
	var validState = false;
	//	var formLogin = document.getElementById("login-form");
	var readJsonFile = function(file) {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if(rawFile.status === 200 || rawFile.status == 0) {
					return JSON.parse(rawFile.responseText);
				}
				return null;
			}
		}
		rawFile.send(null);
	}

})();