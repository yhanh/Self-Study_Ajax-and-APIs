function getData(name) {
  if (name == "Russell") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: "Russell Martin",
          age: Math.floor(Math.random() * 30),
        });
      }, 2000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Not allow to access data."));
      }, 2000);
    });
  }
}

function getMovies(age) {
  if (age < 12) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("cartoon movies");
      }, 1500);
    });
  } else if (age < 18) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("teen movies");
      }, 1500);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Not allow. Too old."));
      }, 1500);
    });
  }
}

getData("Russell")
  .then((obj) => {
    console.log(obj);
    return getMovies(obj.age);
  })
  .then((meg) => {
    console.log(meg);
  })
  .catch((e) => {
    console.log(e);
  });


/* output: 
{ name: 'Russell Martin', age: 2 }
cartoon movies
*/