// Helpers
const hbs = require('hbs');

hbs.registerHelper('capitalizar', (texto) => {
    let palabra = texto.split(' ');

    palabra.forEach((element, idx) => {
        palabra[idx] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
    return palabra.join(' ');
});