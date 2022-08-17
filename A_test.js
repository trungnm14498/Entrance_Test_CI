// Prints help message to the console
// Returns a string

var input1 = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];

function allLongestStrings(inputArray) {
  return inputArray.reduce(function(acc, element, i) {
    if (i==0 || acc[0].length < element.length) {
      return [element];
   }
   if (acc[0].length === element.length) {
      acc.push(element);
   }
   return acc;
  }, [])
}
console.log(allLongestStrings(input1))

var input2 = [60, 40, 55, 75, 64];
function alternatingSums(a) {
    result = [];
    var ele1 = ele2 =0;
    for (var i=0; i < a.length; i++){
      i %2 == 0 ? ele1 += a[i] : ele2+= a[i];
    }
    result.push(ele1);
    result.push(ele2);
    return result
}
console.log(alternatingSums(input2))

