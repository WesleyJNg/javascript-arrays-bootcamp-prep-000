var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(Array,Element) {
  var newArray = Array.unshift(Element);
  return newArray
}

function destructivelyAddElementToBeginningOfArray(Array,Element) {
  Array.push(Element);
  return Array;
}

function accessElementInArray(Array,Index) {
  return Array[Index];
}

function destructivelyRemoveElementFromBeginningOfArray(Array) {
  Array.shift();
  return Array;
}

function removeElementFromBeginningOfArray(Array) {
  var newArray = Array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(Array) {
  Array.pop();
  return Array;
}

function removeElementFromEndOfEvery(Array) {
  
}