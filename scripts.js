/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function(){
	
	const form = document.querySelector('.newsletter form');
	const input = document.getElementById('email');
	const msgArea = document.querySelector('.newsletter .message');
	
	form.addEventListener('submit', function(e) {
		
		e.preventDefault();

		const email = input.value;
		
		if (email !== ""){
			msgArea.innerHTML = `<p>Thank you! Your email address ${email} has been added to our mailing list!</p>`;
		} else {
			msgArea.innerHTML = `<p>Please enter a valid email address.</p>`;
		}			
	});
});