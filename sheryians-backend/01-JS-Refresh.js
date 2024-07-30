let array = [78, 8, 4, 78, 156, 1651, 841, 2121];

// array foreach loop
array.forEach((item) => console.log(item));

// array filter
const filterData = array.filter((item) => item > 100);
console.log(filterData);

// array map
const mapData = array.map((item) => item * 10);
console.log(mapData);

// array find
const findItem = array.find((item) => {
  if (item === 2) {
    return item;
  } else {
    return false;
  }
});
console.log(findItem);

// array indexOf
console.log(array.indexOf(8789797));

// ---------------------

// async await
