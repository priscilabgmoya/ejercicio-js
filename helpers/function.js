export const newFunction = {
    INTERCAMBIA: (text) => {
        return text.split('').map(letter => {
            return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
        }).join('');
    },
    BORRAULTI: (text) => { return text.slice(0, -1); },
    BORRAPRI: (text) => { return text.slice(1); },
    DUP: (text) => { return text + text; },
    ROTA: (text) => { return text.length > 0 ? text.slice(1) + text[0] : ''; },
    INVERTIR: (text) => { return text.split('').reverse().join(''); },
    CHAUAGUS: (text) => { return text.replace(/AGUS/i, ''); },
    AGREGA: (text) => {
        let key = prompt('Ingrese una letra para agregar');
        if (key) {
            return text + key;
        }
    },
    BORRA: (text) => {
        let response = prompt('Ingrese una posicion para eliminar');
        let i = parseInt(response);
        if (i) {
            return text.slice(0, i) + text.slice(i + 1);
        }
    },
};