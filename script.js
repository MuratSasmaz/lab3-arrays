const ms_list = [1905, "Galatasaray", "3.15","Watermelon",1976]
console.log(ms_list);

const firstItem = ms_list[0];
const lastItem = ms_list[ms_list.length - 1];
const middleItem = ms_list[Math.floor(ms_list.length / 2)];
console.log(ms_list.length);

ms_list.push("Victor Osimhen") // add an element to the end
console.log(ms_list);
ms_list.shift();  // remove the first element
console.log(ms_list);
ms_list.splice(1, 1, "true") // replace the second element
console.log(ms_list);

for (let i = 0; i < ms_list.length; i++) {
  console.log(ms_list[i]);
}

ms_list.forEach(function (item) {
  console.log(item);
});

const [first, second, ...remaining] = ms_list;

