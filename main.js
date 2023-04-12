    const arr = [
   { id: 1 },
   { id: 2 },
   { id: 2 },
   { id: 3 },
   { id: 1 },
   { id: 4 },
   { id: 1 }, 
];

function getArrOfUniqueObj(arr) {
   obj = {};
   arr.forEach(item => {
      obj[item.id] = item;
   });
   return Object.values(obj);
}


const output = getArrOfUniqueObj(arr);
console.log(output);
