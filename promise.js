let example = new Promise((resolve, reject) => {
  //   resolve({ name: "Russell", age: 22 });
  reject(new Error("not allowed"));
});

example
  .then((data) => {
    console.log(data); // output: { name: 'Russell', age: 22 }
  })
  .catch((e) => {
    console.log(e); // output: Error: not allowed
  });

// Promise 是對於一個資料庫或連接到的數據庫裡面，做連結時他會回傳一個 Promise，Promise 可以是 resolve 或是 reject，若是 reject 會是一個 error object，要用 catch 接住，若是 resolve，會得到/回傳要的資料，要用 then 接住