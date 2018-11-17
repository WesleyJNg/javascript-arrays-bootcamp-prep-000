var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(Array,Element) {
  var newArray = Array.unshift(Element);
  return newArray
}

function destructivelyAddElementToBeginningOfArray(Array,Element) {
  var Array = Array.push(Element);
  return Array;
}