function getData(name) {
  if (name == "Russell") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: "Russell Martin",
          age: Math.floor(Math.random() * 300),
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

async function showMovie() {
  try {
    const obj = await getData("Russell");
    const movie = await getMovies(obj.age);
    console.log(movie); // output: cartoon movies
  } catch (e) {
    console.log(e); // output: Error: Not allow. Too old.
  }
}

showMovie();
