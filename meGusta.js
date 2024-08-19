// Recuperar el botón
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
	// Al hacer clic en el botón, ejecutar una función
	button.addEventListener('click', function() {
		// Recuperar el id del atributo de HTML
		const id = button.getAttribute('data-id')
		
		// Alternar "me gusta" y "quitar me gusta"
		if (button.classList.contains('liked')) {
			button.classList.remove('liked')  // Fix: 'Remove' -> 'remove'
			button.innerText = 'Me gusta'
		} else {
			button.classList.add('liked')  // Fix: 'Liked' -> 'liked'
			button.innerText = 'Quitar me gusta'
		}
	});
});
