const art = require('ascii-art');

art.font('hello world', 'Doom', 'red',  (renderer) => {
	console.log(renderer);
});

//Reiniciamos la consola
console.log(art.style('', 'white'));
