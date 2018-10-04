const app = "I don't do much."
function bumpCounter() {
  var counter = 0;;
  function addBump() {
    counter++;
  }
  function getBumps() {
    return counter;
  }
  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {
  return function(deadlyDevise) {
    return { animalType: animalType,
              deadlyDevise: deadlyDevise}
  }
}
