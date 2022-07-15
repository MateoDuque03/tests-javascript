function calculateCoordinates(coordinates, targetSum){
    let accCoordinates = [];
    for (let i = 0; i < coordinates.length; i += 1) {
        let coord1 = coordinates[i];
        let coord2 = parseFloat((targetSum - coord1).toFixed(5));
        if (accCoordinates.indexOf(coord2) >=0) {
            return [coord1,coord2];
        }
        accCoordinates.push(coordinates[i]);
    }
}

let array = [ 94.46073, -133.47681, 73.29487, 21.46536, -105.10229, 24.52823, 149.68843, -102.74936, -176.28135, 81.24049]
let targetSum = -112.01145;
console.log(calculateCoordinates(array, targetSum));