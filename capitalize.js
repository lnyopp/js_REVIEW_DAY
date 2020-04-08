
let array = ['i','am','now','capitalized'];

capitalize = function (i){
    return i.toUpperCase();
};

array = array.map(capitalize);

console.log(array);