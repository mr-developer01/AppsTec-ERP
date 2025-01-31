const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
let maxOccurence = "";
const obj = {};
for (let i = 0; i < words.length; i++) {
  obj[words[i]] = (obj[words[i]] || 0) + 1;
  if (maxOccurence === "" || obj[words[i]] > obj[maxOccurence]) {
    maxOccurence = words[i];
  }
}

console.log(obj, maxOccurence);

function checkMidChar(data) {

  const midVal = Math.floor(data.length / 2);
  return data.length % 2 === 0 ? data[midVal] + data[midVal + 1] : data[midVal];
  
}

console.log(checkMidChar("a"));
