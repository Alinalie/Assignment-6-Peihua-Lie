"use strict";

$(document).ready(() => {
	// display data from session storage

	const sessionEmail = sessionStorage.getItem("email")
	$("#email").text(sessionEmail);

	const sessionPhone = sessionStorage.getItem("phone")
	$("#phone").text(sessionPhone);

	const sessionZip = sessionStorage.getItem("zip")
	$("#zip").text(sessionZip);

	const sessionDob = sessionStorage.getItem("dob")
	$("#dob").text(sessionDob);


	//code that uses the history object to go back to the previous page
	$("#back").click(() => {
		history.back();

	}); // end of click()

}); // end of ready()