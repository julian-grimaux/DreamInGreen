const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa');
		categoriaActiva = categoria.dataset.categoria;


		// Activamos el contenedor de preguntas que corresponde
		contenedorPreguntas.forEach((contenedor) => {
			if(contenedor.dataset.categoria === categoriaActiva){
				contenedor.classList.add('activo');
			} else {
				contenedor.classList.remove('activo');
			}
		});
	});
});

function irA(dondeVoy){
	let catDestino=document.querySelector('#categorias #' + dondeVoy);
	categorias.forEach((elemento) => {
		elemento.classList.remove('activa');
	});

	catDestino.classList.toggle('activa');
	categoriaActiva = catDestino.dataset.categoria;


	// Activamos el contenedor de preguntas que corresponde
	contenedorPreguntas.forEach((contenedor) => {
		if(contenedor.dataset.categoria === categoriaActiva){
			contenedor.classList.add('activo');
		} else {
			contenedor.classList.remove('activo');
		}
	});
}