/*
  En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
  Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
  Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación.
  Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

  A tener en cuenta:
  Siempre habrá un paso de diferencia o ninguno.
  La modificación puede ocurrir en cualquier lugar de la cadena.
  La secuencia original puede estar vacía
*/

function findNaughtyStep(original, modified) {
  // Code here
  let letterModified = ''
  if (original === modified) return letterModified

  if(original.length < modified.length) {
    const validation = (val, index) => original[index] !== val
    const different = [...modified].find(validation)
    letterModified += different
  } else {
    const validation = (val, index) => modified[index] !== val
    const different = [...original].find(validation)
    letterModified += different
  }

  return letterModified
}

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'