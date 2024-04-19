/*
  En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
  Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que,
  dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
  Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
 */

function manufacture(gifts, materials) {
  // Code here
  const canMake = []
  for (let gift of gifts){
    const giftSplit = gift.split('')
    let newGift = ''
    for(let element of giftSplit) {
      if(!materials.includes(element)) break
      newGift += element
    }
    if (newGift === gift) {
        canMake.push(gift)
    }
  }

  return canMake
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
manufacture(gifts, materials) // ["tren", "oso"]