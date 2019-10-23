const figlet = require('figlet');
const asciiart = require('ascii-art');

figlet('¡Vamos!', { font: 'Ghost', horizontalLayout: 'default', verticalLayout: 'default' }, (err, result) => {
    console.log( err || result );
})