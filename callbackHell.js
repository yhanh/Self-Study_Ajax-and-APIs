// function getData(name) {
//   setTimeout(() => {
//     return { name: name, age: Math.random() * 20, major: "LA" };
//   }, 2000);
// }

// console.log("start");

// let data = getData("Hannah");
// console.log(data);

// console.log("end");

/* output:
start
undefined
end */

// ====================

function getData(name, callback) {
  setTimeout(() => {
    callback({ name: name, age: Math.floor(Math.random() * 30), major: "LA" });
  }, 2000);
}

function getMovies(age, callback) {
  if (age < 12) {
    setTimeout(() => {
      callback("cartoon movies");
    }, 1500);
  } else if (age < 18) {
    setTimeout(() => {
      callback("teen movies");
    }, 1500);
  } else {
    setTimeout(() => {
      callback("adult movies");
    }, 1500);
  }
}

getData("Hannah", (obj) => {
  console.log(obj);

  getMovies(obj.age, (str) => {
    console.log(str);
  });
});

/* output:
{ name: 'Hannah', age: 6, major: 'LA' }
cartoon movies
-----------------------------------------
{ name: 'Hannah', age: 15, major: 'LA' }
teen movies
-----------------------------------------
{ name: 'Hannah', age: 27, major: 'LA' }
adult movies
*/
