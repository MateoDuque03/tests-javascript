/**
  En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés
  Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto 
  y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.
  Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

  Notas:
  Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
  En el mensaje final no deben quedar paréntesis.
  El nivel máximo de anidamiento es 2.
  */

function decode(message) {
  // Code here
  const stack = [];
    let result = '';
    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        if (char === '(') {
            stack.push(result);
            result = '';
        } else if (char === ')') {
            result = stack.pop() + result.split('').reverse().join('');
        } else {
            result += char;
        }
    }

    return result;
}

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!